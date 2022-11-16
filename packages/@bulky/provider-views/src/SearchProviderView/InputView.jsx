import { h } from "preact";

export default ({ i18n, search }) => {
  let input;
  const validateAndSearch = () => {
    if (input.value) {
      search(input.value);
    }
  };
  const handleKeyPress = (ev) => {
    if (ev.keyCode === 13) {
      validateAndSearch();
    }
  };

  return (
    <div className="bulky-SearchProvider">
      <input
        className="bulky-u-reset bulky-c-textInput bulky-SearchProvider-input"
        type="search"
        aria-label={i18n("enterTextToSearch")}
        placeholder={i18n("enterTextToSearch")}
        onKeyUp={handleKeyPress}
        ref={(input_) => {
          input = input_;
        }}
        data-bulky-super-focusable
      />
      <button
        className="bulky-u-reset bulky-c-btn bulky-c-btn-primary bulky-SearchProvider-searchButton"
        type="button"
        onClick={validateAndSearch}
      >
        {i18n("searchImages")}
      </button>
    </div>
  );
};
