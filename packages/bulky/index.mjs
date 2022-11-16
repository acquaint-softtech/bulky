// Core
export { default as bulky, debugLogger } from "@bulky/core";

/**
 * @deprecated Use `bulky` instead of `Core`
 */
export function Core() {
  throw new Error("Core has been renamed to bulky");
}

// Utilities
export * as server from "@bulky/companion-client";

import * as ProviderView from "@bulky/provider-views";
export const views = { ProviderView };

// Stores
export { default as DefaultStore } from "@bulky/store-default";
export { default as ReduxStore } from "@bulky/store-redux";

// UI plugins
export { default as Dashboard } from "@bulky/dashboard";
export { default as DragDrop } from "@bulky/drag-drop";
export { default as DropTarget } from "@bulky/drop-target";
export { default as FileInput } from "@bulky/file-input";
export { default as ImageEditor } from "@bulky/image-editor";
export { default as Informer } from "@bulky/informer";
export { default as ProgressBar } from "@bulky/progress-bar";
export { default as StatusBar } from "@bulky/status-bar";

// Acquirers
export { default as Audio } from "@bulky/audio";
export { default as Box } from "@bulky/box";
export { default as Dropbox } from "@bulky/dropbox";
export { default as Facebook } from "@bulky/facebook";
export { default as GoogleDrive } from "@bulky/google-drive";
export { default as Instagram } from "@bulky/instagram";
export { default as OneDrive } from "@bulky/onedrive";
export { default as RemoteSources } from "@bulky/remote-sources";
export { default as ScreenCapture } from "@bulky/screen-capture";
export { default as Unsplash } from "@bulky/unsplash";
export { default as Url } from "@bulky/url";
export { default as Webcam } from "@bulky/webcam";
export { default as Zoom } from "@bulky/zoom";

// Uploaders
export { default as AwsS3 } from "@bulky/aws-s3";
export { default as AwsS3Multipart } from "@bulky/aws-s3-multipart";
export { default as Transloadit } from "@bulky/transloadit";
export { default as Tus } from "@bulky/tus";
export { default as XHRUpload } from "@bulky/xhr-upload";

// Miscellaneous
export { default as Compressor } from "@bulky/compressor";
export { default as Form } from "@bulky/form";
export { default as GoldenRetriever } from "@bulky/golden-retriever";
export { default as ReduxDevTools } from "@bulky/redux-dev-tools";
export { default as ThumbnailGenerator } from "@bulky/thumbnail-generator";

// Special hack for Transloadit static exports
import Transloadit, {
  COMPANION_URL,
  COMPANION_ALLOWED_HOSTS,
} from "@bulky/transloadit";
Transloadit.COMPANION_URL = COMPANION_URL;
Transloadit.COMPANION_ALLOWED_HOSTS = COMPANION_ALLOWED_HOSTS;

export const locales = {};
