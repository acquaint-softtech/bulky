import { h } from "preact";

function GridListItem(props) {
  const {
    className,
    isDisabled,
    restrictionError,
    isChecked,
    title,
    itemIconEl,
    showTitles,
    toggleCheckbox,
    recordShiftKeyPress,
    id,
    children,
  } = props;

  return (
    <li
      className={className}
      title={isDisabled ? restrictionError?.message : null}
    >
      <input
        type="checkbox"
        className={`bulky-u-reset bulky-ProviderBrowserItem-checkbox ${
          isChecked ? "bulky-ProviderBrowserItem-checkbox--is-checked" : ""
        } bulky-ProviderBrowserItem-checkbox--grid`}
        onChange={toggleCheckbox}
        onKeyDown={recordShiftKeyPress}
        name="listitem"
        id={id}
        checked={isChecked}
        disabled={isDisabled}
        data-bulky-super-focusable
      />
      <label
        htmlFor={id}
        aria-label={title}
        className="bulky-u-reset bulky-ProviderBrowserItem-inner"
      >
        <span className="bulky-ProviderBrowserItem-inner-relative">
          {itemIconEl}

          {showTitles && title}

          {children}
        </span>
      </label>
    </li>
  );
}

export default GridListItem;
