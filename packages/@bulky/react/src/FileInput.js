import { createElement as h, Component } from "react";
import PropTypes from "prop-types";
import FileInputPlugin from "@bulky/file-input";
import * as propTypes from "./propTypes.js";

/**
 * React component that renders an area in which files can be dropped to be
 * uploaded.
 */

class FileInput extends Component {
  componentDidMount() {
    this.installPlugin();
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (prevProps.bulky !== this.props.bulky) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
  }

  componentWillUnmount() {
    this.uninstallPlugin();
  }

  installPlugin() {
    const { bulky, locale, pretty, inputName } = this.props;
    const options = {
      id: "react:FileInput",
      locale,
      pretty,
      inputName,
      target: this.container,
    };
    delete options.bulky;

    bulky.use(FileInputPlugin, options);

    this.plugin = bulky.getPlugin(options.id);
  }

  uninstallPlugin(props = this.props) {
    const { bulky } = props;

    bulky.removePlugin(this.plugin);
  }

  render() {
    return h("div", {
      className: "bulky-Container",
      ref: (container) => {
        this.container = container;
      },
    });
  }
}

FileInput.propTypes = {
  bulky: propTypes.bulky.isRequired,
  locale: propTypes.locale,
  pretty: PropTypes.bool,
  inputName: PropTypes.string,
};
// Must be kept in sync with @bulky/file-input/src/FileInput.jsx
FileInput.defaultProps = {
  locale: undefined,
  pretty: true,
  inputName: "files[]",
};

export default FileInput;
