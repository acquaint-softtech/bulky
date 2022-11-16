import { h, Component } from "preact";

class UrlUI extends Component {
  componentDidMount() {
    this.input.value = "";
  }

  #handleKeyPress = (ev) => {
    if (ev.keyCode === 13) {
      this.#handleSubmit();
    }
  };

  #handleSubmit = () => {
    const { addFile } = this.props;
    const preparedValue = this.input.value.trim();
    addFile(preparedValue);
  };

  render() {
    const { i18n } = this.props;
    return (
      <div className="bulky-Url">
        <input
          className="bulky-u-reset bulky-c-textInput bulky-Url-input"
          type="text"
          aria-label={i18n("enterUrlToImport")}
          placeholder={i18n("enterUrlToImport")}
          onKeyUp={this.#handleKeyPress}
          ref={(input) => {
            this.input = input;
          }}
          data-bulky-super-focusable
        />
        <button
          className="bulky-u-reset bulky-c-btn bulky-c-btn-primary bulky-Url-importButton"
          type="button"
          onClick={this.#handleSubmit}
        >
          {i18n("import")}
        </button>
      </div>
    );
  }
}

export default UrlUI;
