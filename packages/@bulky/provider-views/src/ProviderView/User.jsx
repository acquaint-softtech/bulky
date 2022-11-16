import { h } from "preact";

export default ({ i18n, logout, username }) => {
  return [
    <span className="bulky-ProviderBrowser-user" key="username">
      {username}
    </span>,
    <button
      type="button"
      onClick={logout}
      className="bulky-u-reset bulky-c-btn bulky-ProviderBrowser-userLogout"
      key="logout"
    >
      {i18n("logOut")}
    </button>,
  ];
};
