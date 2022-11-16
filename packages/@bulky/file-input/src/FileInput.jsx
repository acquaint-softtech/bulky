import { UIPlugin } from "@bulky/core";
import toArray from "@bulky/utils/lib/toArray";
import { h } from "preact";

import packageJson from "../package.json";
import locale from "./locale.js";

export default class FileInput extends UIPlugin {
  static VERSION = packageJson.version;

  constructor(bulky, opts) {
    super(bulky, opts);
    this.id = this.opts.id || "FileInput";
    this.title = "File Input";
    this.type = "acquirer";

    this.defaultLocale = locale;

    // Default options, must be kept in sync with @bulky/react/src/FileInput.js.
    const defaultOptions = {
      target: null,
      pretty: true,
      inputName: "files[]",
    };

    // Merge default options with the ones set by user
    this.opts = { ...defaultOptions, ...opts };

    this.i18nInit();

    this.render = this.render.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addFiles(files) {
    const descriptors = files.map((file) => ({
      source: this.id,
      name: file.name,
      type: file.type,
      data: file,
    }));

    try {
      this.bulky.addFiles(descriptors);
    } catch (err) {
      this.bulky.log(err);
    }
  }

  handleInputChange(event) {
    this.bulky.log("[FileInput] Something selected through input...");
    const files = toArray(event.target.files);
    this.addFiles(files);

    // We clear the input after a file is selected, because otherwise
    // change event is not fired in Chrome and Safari when a file
    // with the same name is selected.
    // ___Why not use value="" on <input/> instead?
    //    Because if we use that method of clearing the input,
    //    Chrome will not trigger change if we drop the same file twice (Issue #768).
    event.target.value = null; // eslint-disable-line no-param-reassign
  }

  handleClick() {
    this.input.click();
  }

  render() {
    /* http://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/ */
    const hiddenInputStyle = {
      width: "0.1px",
      height: "0.1px",
      opacity: 0,
      overflow: "hidden",
      position: "absolute",
      zIndex: -1,
    };

    const { restrictions } = this.bulky.opts;
    const accept = restrictions.allowedFileTypes
      ? restrictions.allowedFileTypes.join(",")
      : null;

    return (
      <div className="bulky-FileInput-container">
        <input
          className="bulky-FileInput-input"
          style={this.opts.pretty && hiddenInputStyle}
          type="file"
          name={this.opts.inputName}
          onChange={this.handleInputChange}
          multiple={restrictions.maxNumberOfFiles !== 1}
          accept={accept}
          ref={(input) => {
            this.input = input;
          }}
        />
        {this.opts.pretty && (
          <button
            className="bulky-FileInput-btn"
            type="button"
            onClick={this.handleClick}
          >
            {this.i18n("chooseFiles")}
          </button>
        )}
      </div>
    );
  }

  install() {
    const { target } = this.opts;
    if (target) {
      this.mount(target, this);
    }
  }

  uninstall() {
    this.unmount();
  }
}
