import { h } from "preact";

function GoogleIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <circle fill="#FFF" cx="13" cy="13" r="13" />
        <path
          d="M21.64 13.205c0-.639-.057-1.252-.164-1.841H13v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
          fill="#4285F4"
          fill-rule="nonzero"
        />
        <path
          d="M13 22c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.957v2.332A8.997 8.997 0 0013 22z"
          fill="#34A853"
          fill-rule="nonzero"
        />
        <path
          d="M7.964 14.71A5.41 5.41 0 017.682 13c0-.593.102-1.17.282-1.71V8.958H4.957A8.996 8.996 0 004 13c0 1.452.348 2.827.957 4.042l3.007-2.332z"
          fill="#FBBC05"
          fill-rule="nonzero"
        />
        <path
          d="M13 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C17.463 4.891 15.426 4 13 4a8.997 8.997 0 00-8.043 4.958l3.007 2.332C8.672 9.163 10.656 7.58 13 7.58z"
          fill="#EA4335"
          fill-rule="nonzero"
        />
        <path d="M4 4h18v18H4z" />
      </g>
    </svg>
  );
}

function AuthView(props) {
  const { pluginName, pluginIcon, i18nArray, handleAuth } = props;
  // In order to comply with Google's brand we need to create a different button
  // for the Google Drive plugin
  const isGoogleDrive = pluginName === "Google Drive";

  const pluginNameComponent = (
    <span className="bulky-Provider-authTitleName">
      {pluginName}
      <br />
    </span>
  );
  return (
    <div className="bulky-Provider-auth">
      <div className="bulky-Provider-authIcon">{pluginIcon()}</div>
      <div className="bulky-Provider-authTitle">
        {i18nArray("authenticateWithTitle", {
          pluginName: pluginNameComponent,
        })}
      </div>
      {isGoogleDrive ? (
        <button
          type="button"
          className="bulky-u-reset bulky-c-btn bulky-c-btn-primary bulky-Provider-authBtn bulky-Provider-btn-google"
          onClick={handleAuth}
          data-bulky-super-focusable
        >
          <GoogleIcon />
          {i18nArray("signInWithGoogle")}
        </button>
      ) : (
        <button
          type="button"
          className="bulky-u-reset bulky-c-btn bulky-c-btn-primary bulky-Provider-authBtn"
          onClick={handleAuth}
          data-bulky-super-focusable
        >
          {i18nArray("authenticateWith", { pluginName })}
        </button>
      )}
    </div>
  );
}

export default AuthView;