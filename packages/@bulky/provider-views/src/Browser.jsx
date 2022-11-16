import { h } from "preact";

import classNames from "classnames";

import remoteFileObjToLocal from "@bulky/utils/lib/remoteFileObjToLocal";

import Filter from "./Filter.jsx";
import FooterActions from "./FooterActions.jsx";
import Item from "./Item/index.jsx";

const VIRTUAL_SHARED_DIR = "shared-with-me";

function Browser(props) {
  const {
    currentSelection,
    folders,
    files,
    bulkyFiles,
    viewType,
    headerComponent,
    showBreadcrumbs,
    isChecked,
    toggleCheckbox,
    recordShiftKeyPress,
    handleScroll,
    showTitles,
    i18n,
    validateRestrictions,
    showFilter,
    filterQuery,
    filterInput,
    getNextFolder,
    cancel,
    done,
    columns,
  } = props;

  const selected = currentSelection.length;

  return (
    <div
      className={classNames(
        "bulky-ProviderBrowser",
        `bulky-ProviderBrowser-viewType--${viewType}`
      )}
    >
      <div className="bulky-ProviderBrowser-header">
        <div
          className={classNames(
            "bulky-ProviderBrowser-headerBar",
            !showBreadcrumbs && "bulky-ProviderBrowser-headerBar--simple"
          )}
        >
          {headerComponent}
        </div>
      </div>

      {showFilter && (
        <Filter
          i18n={i18n}
          filterQuery={filterQuery}
          filterInput={filterInput}
        />
      )}

      {(() => {
        if (!folders.length && !files.length) {
          return (
            <div className="bulky-Provider-empty">{i18n("noFilesFound")}</div>
          );
        }

        return (
          <div className="bulky-ProviderBrowser-body">
            <ul
              className="bulky-ProviderBrowser-list"
              onScroll={handleScroll}
              role="listbox"
              // making <ul> not focusable for firefox
              tabIndex="-1"
            >
              {folders.map((folder) => {
                return Item({
                  columns,
                  showTitles,
                  viewType,
                  i18n,
                  id: folder.id,
                  title: folder.name,
                  getItemIcon: () => folder.icon,
                  isChecked: isChecked(folder),
                  toggleCheckbox: (event) => toggleCheckbox(event, folder),
                  recordShiftKeyPress,
                  type: "folder",
                  isDisabled: isChecked(folder)?.loading,
                  isCheckboxDisabled: folder.id === VIRTUAL_SHARED_DIR,
                  handleFolderClick: () => getNextFolder(folder),
                });
              })}

              {files.map((file) => {
                const restrictionError = validateRestrictions(
                  remoteFileObjToLocal(file),
                  [...bulkyFiles, ...currentSelection]
                );

                return Item({
                  id: file.id,
                  title: file.name,
                  author: file.author,
                  getItemIcon: () => file.icon,
                  isChecked: isChecked(file),
                  toggleCheckbox: (event) => toggleCheckbox(event, file),
                  recordShiftKeyPress,
                  columns,
                  showTitles,
                  viewType,
                  i18n,
                  type: "file",
                  isDisabled: restrictionError && !isChecked(file),
                  restrictionError,
                });
              })}
            </ul>
          </div>
        );
      })()}

      {selected > 0 && (
        <FooterActions
          selected={selected}
          done={done}
          cancel={cancel}
          i18n={i18n}
        />
      )}
    </div>
  );
}

export default Browser;
