---
type: docs
order: 1
title: "bulky"
module: "@bulky/core"
permalink: docs/bulky/
category: "Docs"
tagline: "The core module that orchestrates everything"
---

This is the core module that orchestrates everything in bulky, managing state and events and providing methods.

```js
import bulky from "@bulky/core";

const bulky = new bulky();
```

## Installation

Install from NPM:

```shell
npm install @bulky/core
```

In the [CDN package](/docs/#With-a-script-tag), the `Core` class is available on the `bulky` global object:

```js
const { Core } = bulky;
```

## Options

The bulky core module has the following configurable options:

```js
const bulky = new bulky({
  id: "bulky",
  autoProceed: false,
  allowMultipleUploadBatches: true,
  debug: false,
  restrictions: {
    maxFileSize: null,
    minFileSize: null,
    maxTotalFileSize: null,
    maxNumberOfFiles: null,
    minNumberOfFiles: null,
    allowedFileTypes: null,
    requiredMetaFields: [],
  },
  meta: {},
  onBeforeFileAdded: (currentFile, files) => currentFile,
  onBeforeUpload: (files) => {},
  locale: {},
  store: new DefaultStore(),
  logger: justErrorsLogger,
  infoTimeout: 5000,
});
```

### `id: 'bulky'`

A site-wide unique ID for the instance.

If several bulky instances are being used, for instance, on two different pages, an `id` should be specified. This allows bulky to store information in `localStorage` without colliding with other bulky instances.

Note that this ID should be persistent across page reloads and navigation—it shouldn’t be a random number that is different every time bulky is loaded.
For example, if one bulky instance is used to upload user avatars, and another to add photos to a blog post, you might use:

```js
const avatarUploader = new bulky({ id: "avatar" });
const photoUploader = new bulky({ id: "post" });
```

### `autoProceed: false`

By default bulky will wait for an upload button to be pressed in the UI, or an `.upload()` method to be called, before starting an upload. Setting this to `autoProceed: true` will start uploading automatically after the first file is selected.

### `allowMultipleUploadBatches: true`

Whether to allow several upload batches. This means several calls to `.upload()`, or a user adding more files after already uploading some. An upload batch is made up of the files that were added since the earlier `.upload()` call.

With this option set to `true`, users can upload some files, and then add _more_ files and upload those as well. A model use case for this is uploading images to a gallery or adding attachments to an email.

With this option set to `false`, users can upload some files, and you can listen for the [`'complete'`](/docs/bulky/#complete) event to continue to the next step in your app’s upload flow. A typical use case for this is uploading a new profile picture. If you are integrating with an existing HTML form, this option gives the closest behaviour to a bare `<input type="file">`.

### `logger`

An object of methods that are called with debug information from [`bulky.log`](/docs/bulky/#bulky-log).

Set `logger: debugLogger` to get debug info output to the browser console:

```js
import bulky from "@bulky/core";

const bulky = new bulky({
  logger: debugLogger,
});
```

You can also provide your own logger object: it should expose `debug`, `warn` and `error` methods, as shown in the examples below.

Here’s an example of a `logger` that does nothing:

```js
const nullLogger = {
  debug: (...args) => {},
  warn: (...args) => {},
  error: (...args) => {},
};
```

`logger: debugLogger` looks like this:

```js
const debugLogger = {
  debug: (...args) => console.debug(`[bulky] [${getTimeStamp()}]`, ...args),
  warn: (...args) => console.warn(`[bulky] [${getTimeStamp()}]`, ...args),
  error: (...args) => console.error(`[bulky] [${getTimeStamp()}]`, ...args),
};
```

By providing your own `logger`, you can send the debug information to a server, choose to log errors only, etc.

### `restrictions: {}`

Optionally, provide rules and conditions to limit the type and/or number of files that can be selected.

**Parameters**

- `maxFileSize` _null | number_ — maximum file size in bytes for each individual file
- `minFileSize` _null | number_ — minimum file size in bytes for each individual file
- `maxTotalFileSize` _null | number_ — maximum file size in bytes for all the files that can be selected for upload
- `maxNumberOfFiles` _null | number_ — total number of files that can be selected
- `minNumberOfFiles` _null | number_ — minimum number of files that must be selected before the upload
- `allowedFileTypes` _null | array_ of wildcards `image/*`, exact mime types `image/jpeg`, or file extensions `.jpg`: `['image/*', '.jpg', '.jpeg', '.png', '.gif']`
- `requiredMetaFields` _array_ of strings

`maxNumberOfFiles` also affects the number of files a user is able to select via the system file dialog in UI plugins like `DragDrop`, `FileInput` and `Dashboard`: when set to `1`, they will only be able to select a single file. When `null` or another number is provided, they will be able to select several files.

`allowedFileTypes` gets passed to the system file dialog via [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Limiting_accepted_file_types)’s accept attribute, so only files matching these types will be selectable.

> If you’d like to force a certain meta field data to be entered before the upload, you can [do so using `onBeforeUpload`](https://github.com/transloadit/bulky/issues/1703#issuecomment-507202561).

> If you need to restrict `allowedFileTypes` to a file extension with double dots, like `.nii.gz`, you can do so by [setting `allowedFileTypes` to the last part of the extension, `allowedFileTypes: ['.gz']`, and then using `onBeforeFileAdded` to filter for `.nii.gz`](https://github.com/transloadit/bulky/issues/1822#issuecomment-526801208).

### `meta: {}`

Metadata object, used for passing things like public keys, usernames, tags and so on:

```js
const bulky = new bulky({
  // ...
  meta: {
    username: "John",
  },
});
```

This global metadata is added to each file in bulky. It can be modified by two methods:

1. [`bulky.setMeta({ username: 'Peter' })`](/docs/bulky/#bulky-setMeta-data) — set or update meta for all files.
2. [`bulky.setFileMeta('myfileID', { resize: 1500 })`](/docs/bulky/#bulky-setFileMeta-fileID-data) — set or update meta for specific file.

Metadata from each file is then attached to uploads in [Tus](/docs/tus/) and [XHRUpload](/docs/xhrupload/) plugins.

Metadata can also be added from a `<form>` element on your page, through the [Form](/docs/form/) plugin or through the UI if you are using Dashboard with the [`metaFields`](/docs/dashboard/#metaFields) option.

<a id="onBeforeFileAdded"></a>

### `onBeforeFileAdded: (currentFile, files) => currentFile`

A function run before a file is added to bulky. It gets passed `(currentFile, files)` where `currentFile` is a file that is about to be added, and `files` is an object with all files that already are in bulky.

Use this function to run any number of custom checks on the selected file, or manipulate it, for instance, by optimizing a file name.

> ⚠️ Note that this method is intended for quick synchronous checks/modifications only. If you need to do an async API call, or heavy work on a file (like compression or encryption), you should use a [custom plugin](/docs/writing-plugins/#Example-of-a-custom-plugin) instead.

Return `true`/nothing or a modified file object to go ahead with adding the file:

<!-- eslint-disable no-dupe-keys -->

<!-- eslint-disable consistent-return -->

```js
const bulky = new bulky({
  // ...
  onBeforeFileAdded: (currentFile, files) => {
    if (currentFile.name === "forest-IMG_0616.jpg") {
      return true;
    }
  },

  // or

  onBeforeFileAdded: (currentFile, files) => {
    const modifiedFile = {
      ...currentFile,
      name: `${currentFile.name}__${Date.now()}`,
    };
    return modifiedFile;
  },
});
```

Return false to abort adding the file:

<!-- eslint-disable consistent-return -->

```js
const bulky = new bulky({
  // ...
  onBeforeFileAdded: (currentFile, files) => {
    if (!currentFile.type) {
      // log to console
      bulky.log(`Skipping file because it has no type`);
      // show error message to the user
      bulky.info(`Skipping file because it has no type`, "error", 500);
      return false;
    }
  },
});
```

**Note:** no notification will be shown to the user about a file not passing validation by default. We recommend showing a message using [`bulky.info()`](#bulky-info) and logging to console for debugging purposes via [`bulky.log()`](#bulky-log).

<a id="onBeforeUpload"></a>

### `onBeforeUpload: (files) => files`

A function run before an upload begins. Gets passed `files` object with all the files that are already in bulky.

Use this to check if all files or their total number match your requirements, or manipulate all the files at once before upload.

> ⚠️ Note that this method is intended for quick synchronous checks/modifications only. If you need to do an async API call, or heavy work on a file (like compression or encryption), you should use a [custom plugin](/docs/writing-plugins/#Example-of-a-custom-plugin) instead.

Return true or modified `files` object to go ahead:

```js
const bulky = new bulky({
  // ...
  onBeforeUpload: (files) => {
    // We’ll be careful to return a new object, not mutating the original `files`
    const updatedFiles = {};
    Object.keys(files).forEach((fileID) => {
      updatedFiles[fileID] = {
        ...files[fileID],
        name: `${myCustomPrefix}__${files[fileID].name}`,
      };
    });
    return updatedFiles;
  },
});
```

Return false to abort:

<!-- eslint-disable consistent-return -->

```js
const bulky = new bulky({
  // ...
  onBeforeUpload: (files) => {
    if (Object.keys(files).length < 2) {
      // log to console
      bulky.log(
        `Aborting upload because only ${
          Object.keys(files).length
        } files were selected`
      );
      // show error message to the user
      bulky.info(`You have to select at least 2 files`, "error", 500);
      return false;
    }
  },
});
```

**Note:** no notification will be shown to the user about a file not passing validation by default. We recommend showing a message using [`bulky.info()`](#bulky-info) and logging to console for debugging purposes via [`bulky.log()`](#bulky-log).

### `locale: {}`

```js
export default {
  strings: {
    addBulkFilesFailed: {
      0: "Failed to add %{smart_count} file due to an internal error",
      1: "Failed to add %{smart_count} files due to internal errors",
    },
    youCanOnlyUploadX: {
      0: "You can only upload %{smart_count} file",
      1: "You can only upload %{smart_count} files",
    },
    youHaveToAtLeastSelectX: {
      0: "You have to select at least %{smart_count} file",
      1: "You have to select at least %{smart_count} files",
    },
    exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
    missingRequiredMetaField: "Missing required meta fields",
    missingRequiredMetaFieldOnFile:
      "Missing required meta fields in %{fileName}",
    inferiorSize: "This file is smaller than the allowed size of %{size}",
    youCanOnlyUploadFileTypes: "You can only upload: %{types}",
    noMoreFilesAllowed: "Cannot add more files",
    noDuplicates:
      "Cannot add the duplicate file '%{fileName}', it already exists",
    companionError: "Connection with Companion failed",
    authAborted: "Authentication aborted",
    companionUnauthorizeHint:
      "To unauthorize to your %{provider} account, please go to %{url}",
    failedToUpload: "Failed to upload %{file}",
    noInternetConnection: "No Internet connection",
    connectedToInternet: "Connected to the Internet",
    // Strings for remote providers
    noFilesFound: "You have no files or folders here",
    selectX: {
      0: "Select %{smart_count}",
      1: "Select %{smart_count}",
    },
    allFilesFromFolderNamed: "All files from folder %{name}",
    openFolderNamed: "Open folder %{name}",
    cancel: "Cancel",
    logOut: "Log out",
    filter: "Filter",
    resetFilter: "Reset filter",
    loading: "Loading...",
    authenticateWithTitle:
      "Please authenticate with %{pluginName} to select files",
    authenticateWith: "Connect to %{pluginName}",
    signInWithGoogle: "Sign in with Google",
    searchImages: "Search for images",
    enterTextToSearch: "Enter text to search for images",
    search: "Search",
    emptyFolderAdded: "No files were added from empty folder",
    folderAlreadyAdded: 'The folder "%{folder}" was already added',
    folderAdded: {
      0: "Added %{smart_count} file from %{folder}",
      1: "Added %{smart_count} files from %{folder}",
    },
  },
};
```

### `store: defaultStore()`

The Store that is used to keep track of internal state. By [default](/docs/stores/#DefaultStore), a plain object is used.

This option can be used to plug bulky state into an external state management library, such as [Redux](/docs/stores/#ReduxStore). You can then write custom views with the library that is also used by the rest of the application.

<!-- TODO document store API -->

### `infoTimeout`

**default:** 5000

Set the time during which the Informer message will be visible with messages about errors, restrictions, etc.

## File Objects

bulky internally uses file objects that abstract over local files and files from remote providers, and that contain extra data like user-specified metadata and upload progress information.

### `file.source`

Name of the plugin that was responsible for adding this file. Typically a remote provider plugin like `'GoogleDrive'` or a UI plugin like `'DragDrop'`.

### `file.id`

Unique ID for the file.

### `file.name`

The name of the file.

### `file.meta`

Object containing file metadata. Any file metadata should be JSON-serializable.

### `file.type`

MIME type of the file. This may actually be guessed if a file type was not provided by the user’s browser, so this is a best-effort value and not guaranteed to be correct.

### `file.data`

For local files, this is the actual [`File`][] or [`Blob`][] object representing the file contents.

For files that are imported from remote providers, the file data is not available in the browser.

[`file`]: https://developer.mozilla.org/en-US/docs/Web/API/File
[`blob`]: https://developer.mozilla.org/en-US/docs/Web/API/Blob

### `file.progress`

An object with upload progress data.

**Properties**

- `bytesUploaded` - Number of bytes uploaded so far.
- `bytesTotal` - Number of bytes that must be uploaded in total.
- `uploadStarted` - Null if the upload has not started yet. Once started, this property stores a UNIX timestamp. Note that this is only set _after_ preprocessing.
- `uploadComplete` - Boolean indicating if the upload has completed. Note this does _not_ mean that postprocessing has completed, too.
- `percentage` - Integer percentage between 0 and 100.

### `file.size`

Size in bytes of the file.

### `file.isRemote`

Boolean: is this file imported from a remote provider?

### `file.remote`

Grab bag of data for remote providers. Generally not interesting for end users.

### `file.preview`

An optional URL to a visual thumbnail for the file.

### `file.uploadURL`

When an upload is completed, this may contain a URL to the uploaded file. Depending on server configuration it may not be accessible or correct.

## Methods

### `bulky.use(plugin, opts)`

Add a plugin to bulky, with an optional plugin options object.

```js
import bulky from "@bulky/core";
import DragDrop from "@bulky/drag-drop";

const bulky = new bulky();
bulky.use(DragDrop, { target: "body" });
```

### `bulky.removePlugin(instance)`

Uninstall and remove a plugin.

### `bulky.getPlugin(id)`

Get a plugin by its [`id`](/docs/plugins/#id) to access its methods.

### `bulky.getID()`

Get the bulky instance ID, see the [`id` option](#id-39-bulky-39).

### `bulky.addFile(fileObject)`

Add a new file to bulky’s internal state.

```js
bulky.addFile({
  name: "my-file.jpg", // file name
  type: "image/jpeg", // file type
  data: blob, // file blob
  meta: {
    // optional, store the directory path of a file so bulky can tell identical files in different directories apart.
    relativePath: webkitFileSystemEntry.relativePath,
  },
  source: "Local", // optional, determines the source of the file, for example, Instagram.
  isRemote: false, // optional, set to true if actual file is not in the browser, but on some remote server, for example,
  // when using companion in combination with Instagram.
});
```

`addFile` gives an error if the file cannot be added, either because `onBeforeFileAdded(file)` gave an error, or because `bulky.opts.restrictions` checks failed.

If you try to add a file that already exists, `addFile` will throw an error. Unless that duplicate file was dropped with a folder — duplicate files from different folders are allowed, when selected with that folder. This is because we add `file.meta.relativePath` to the `file.id`.

If `bulky.opts.autoProceed === true`, bulky will begin uploading automatically when files are added.

`addFile` will return the generated id for the file that was added.

> Sometimes you might need to add a remote file to bulky. This can be achieved by [fetching the file, then creating a Blob object, or using the Url plugin with Companion](https://github.com/transloadit/bulky/issues/1006#issuecomment-413495493).
>
> Sometimes you might need to mark some files as “already uploaded”, so that the user sees them, but they won’t actually be uploaded by bulky. This can be achieved by [looping through files and setting `uploadComplete: true, uploadStarted: true` on them](https://github.com/transloadit/bulky/issues/1112#issuecomment-432339569)

### `bulky.addFiles(fileObjectArray)`

Add many new files to bulky’s internal state at once. Like `bulky.addFile`, but mostly intended for UI plugins, to speed up the UIs. See `bulky.addFile` for the example of the file object shape.

### `bulky.removeFile(fileID)`

Remove a file from bulky.

```js
bulky.removeFile("bulkyteamkongjpg1501851828779");
```

Removing a file that is already being uploaded cancels that upload.

### `bulky.getFile(fileID)`

Get a specific [File Object][file objects] by its ID.

```js
const file = bulky.getFile("bulkyteamkongjpg1501851828779");

const {
  id, // 'bulkyteamkongjpg1501851828779'
  name, // 'nature.jpg'
  extension, // '.jpg'
  type, // 'image/jpeg'
  data, // the Blob object
  size, // 3947642 (returns 'N/A' if size cannot be determined)
  preview, // value that can be used to populate "src" attribute of an "img" tag
} = file;
```

### `bulky.getFiles()`

Get an array of all [File Objects][] that have been added to bulky.

```js
import prettierBytes from "@transloadit/prettier-bytes";

const items = bulky
  .getFiles()
  .map((file) => `<li>${file.name} - ${prettierBytes(file.size)}</li>`)
  .join("");
document.querySelector(".file-list").innerHTML = `<ul>${items}</ul>`;
```

### `bulky.upload()`

Start uploading selected files.

Returns a Promise `result` that resolves with an object containing two arrays of uploaded files:

- `result.successful` - Files that were uploaded successfully.
- `result.failed` - Files that did not upload successfully. These [File Objects][] will have a `.error` property describing what went wrong.

```js
bulky.upload().then((result) => {
  console.info("Successful uploads:", result.successful);

  if (result.failed.length > 0) {
    console.error("Errors:");
    result.failed.forEach((file) => {
      console.error(file.error);
    });
  }
});
```

### `bulky.pauseResume(fileID)`

Toggle pause/resume on an upload. Will only work if resumable upload plugin, such as [Tus](/docs/tus/), is used.

### `bulky.pauseAll()`

Pause all uploads. Will only work if a resumable upload plugin, such as [Tus](/docs/tus/), is used.

### `bulky.resumeAll()`

Resume all uploads. Will only work if resumable upload plugin, such as [Tus](/docs/tus/), is used.

### `bulky.retryUpload(fileID)`

Retry an upload (after an error, for example).

### `bulky.retryAll()`

Retry all uploads (after an error, for example).

### `bulky.setState(patch)`

Update bulky’s internal state. Usually, this method is called internally, but in some cases it might be useful to alter something directly, especially when implementing your own plugins.

bulky’s default state on initialization:

```js
const state = {
  plugins: {},
  files: {},
  currentUploads: {},
  capabilities: {
    resumableUploads: false,
  },
  totalProgress: 0,
  meta: { ...this.opts.meta },
  info: {
    isHidden: true,
    type: "info",
    message: "",
  },
};
```

Updating state:

```js
bulky.setState({
  smth: true,
});
```

State in bulky is considered to be immutable. When updating values, make sure not mutate them, but instead create copies. See [Redux docs](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html) for more info on this. Here is an example that updates progress for a particular file in state:

```js
// We use the spread operator to create a copy of the files object.
const updatedFiles = { ...bulky.getState().files };
// We use the spread operator to create a copy of the files object.
const updatedFile = {
  ...updatedFiles[fileID],
  progress: {
    ...updatedFiles[fileID].progress,
    bytesUploaded: data.bytesUploaded,
    bytesTotal: data.bytesTotal,
    percentage: Math.floor(100 * (data.bytesUploaded / data.bytesTotal)),
  },
};
updatedFiles[data.id] = updatedFile;
bulky.setState({ files: updatedFiles });
```

### `bulky.getState()`

Returns the current state from the [Store](#store-defaultStore).

### `bulky.setFileState(fileID, state)`

Update the state for a single file. This is mostly useful for plugins that may want to store data on [File Objects][], or that need to pass file-specific configurations to other plugins that support it.

`fileID` is the string file ID. `state` is an object that will be merged into the file’s state object.

```js
bulky.getFiles().forEach((file) => {
  // Mark all files as uploaded and complete.
  bulky.setFileState(file.id, {
    progress: { uploadComplete: true, uploadStarted: true },
  });
});
```

### `bulky.setMeta(data)`

Alters global `meta` object in state, the one that can be set in bulky options and gets merged with all newly added files. Calling `setMeta` will also merge newly added meta data with files that had been selected before.

```js
bulky.setMeta({ resize: 1500, token: "ab5kjfg" });
```

### `bulky.setFileMeta(fileID, data)`

Update metadata for a specific file.

```js
bulky.setFileMeta("myfileID", { resize: 1500 });
```

### `bulky.setOptions(opts)`

Change bulky options on the fly. For example, to conditionally change `restrictions.allowedFileTypes` or `locale`:

```js
const bulky = new bulky();
bulky.setOptions({
  restrictions: { maxNumberOfFiles: 3 },
  autoProceed: true,
});

bulky.setOptions({
  locale: {
    strings: {
      cancel: "Отмена",
    },
  },
});
```

You can also change options for plugin on the fly, like this:

```js
// Change width of the Dashboard drag-and-drop aread on the fly
bulky.getPlugin("Dashboard").setOptions({
  width: 300,
});
```

### `bulky.cancelAll({ reason = 'user' })`

Stop all uploads in progress and clear file selection, set progress to 0. More or less, it returns things to the way they were before any user input.

- `reason` - The reason for resetting. Plugins can use this to provide different cleanup behavior. Possible values are:
  - `user` - The user has closed the bulky instance
  - `unmount` - The bulky instance has been closed programatically

### `bulky.close({ reason = 'user' })`

Uninstall all plugins and close down this bulky instance. Also runs `bulky.cancelAll()` before uninstalling.

- `reason` - Same as the `reason` option for `cancelAll`

### `bulky.logout()`

Calls `provider.logout()` on each remote provider plugin (Google Drive, Instagram, etc). Useful, for example, after your users log out of their account in your app — this will clean things up with bulky cloud providers as well, for extra security.

### `bulky.log()`

#### Parameters

- **message** _{string}_
- **type** _{string=}_ `error` or `warning`

Logs stuff to [`logger`](/docs/bulky/#logger) methods.

See [`logger`](/docs/bulky/#logger) docs for details.

```js
bulky.log("[Dashboard] adding files...");
```

### `bulky.info()`

#### Parameters

- **message** _{(string|object)}_ — `'info message'` or `{ message: 'Oh no!', details: 'File couldn’t be uploaded' }`
- **type** _{string} \[type=`'info'`]_ — `'info'`, `'warning'`, `'success'` or `'error'`
- **duration** _{number} \[duration = 3000]_ — in milliseconds

Sets a message in state, with optional details, that can be shown by notification UI plugins. It’s using the [Informer](/docs/informer/) plugin, included by default in Dashboard.

```js
this.info("Oh my, something good happened!", "success", 3000);
```

```js
this.info(
  {
    message: "Oh no, something bad happened!",
    details:
      "File couldn’t be uploaded because there is no internet connection",
  },
  "error",
  5000
);
```

`info-visible` and `info-hidden` events are emitted when this info message should be visible or hidden.

### `bulky.on('event', action)`

Subscribe to an bulky-event. See below for the full list of events.

### `bulky.once('event', action)`

Create an event listener that fires once. See below for the full list of events.

### `bulky.off('event', action)`

Unsubscribe to an bulky-event. See below for the full list of events.

## Events

bulky exposes events that you can subscribe to in your app:

### `file-added`

Fired each time a file is added.

**Parameters**

- `file` - The [File Object][file objects] representing the file that was added.

```javascript
bulky.on("file-added", (file) => {
  console.log("Added file", file);
});
```

### `files-added`

**Parameters**

- `files` - An array of [File Objects][file objects] representing all files that were added at once, in a batch.

Fired each time when one or more files are added — one event, for all files

### `file-removed`

Fired each time a file is removed.

**Parameters**

- `file` - The [File Object][file objects] representing the file that was removed.
- `reason` - A string explaining why the file was removed. See [#2301](https://github.com/transloadit/bulky/issues/2301#issue-628931176) for details. Current reasons are: `removed-by-user` and `cancel-all`.

**Example**

```javascript
bulky.on("file-removed", (file, reason) => {
  console.log("Removed file", file);
});
```

```js
bulky.on("file-removed", (file, reason) => {
  removeFileFromUploadingCounterUI(file);

  if (reason === "removed-by-user") {
    sendDeleteRequestForFile(file);
  }
});
```

### `upload`

Fired when upload starts.

```javascript
bulky.on("upload", (data) => {
  // data object consists of `id` with upload ID and `fileIDs` array
  // with file IDs in current upload
  // data: { id, fileIDs }
  console.log(`Starting upload ${id} for files ${fileIDs}`);
});
```

### `progress`

Fired each time the total upload progress is updated:

**Parameters**

- `progress` - An integer (0-100) representing the total upload progress.

**Example**

```javascript
bulky.on("progress", (progress) => {
  // progress: integer (total progress percentage)
  console.log(progress);
});
```

### `upload-progress`

Fired each time an individual file upload progress is available:

**Parameters**

- `file` - The [File Object][file objects] for the file whose upload has progressed.
- `progress` - [Progress object](#file-progress).

**Example**

```javascript
bulky.on("upload-progress", (file, progress) => {
  // file: { id, name, type, ... }
  // progress: { uploader, bytesUploaded, bytesTotal }
  console.log(file.id, progress.bytesUploaded, progress.bytesTotal);
});
```

### `upload-success`

Fired each time a single upload is completed.

**Parameters**

- `file` - The [File Object][file objects] that has been fully uploaded.
- `response` - An object with response data from the remote endpoint. The actual contents depend on the uploader plugin that is used.

  For `@bulky/xhr-upload`, the shape is:

  ```json
  {
    "status": 200, // HTTP status code (0, 200, 300)
    "body": "…", // response body
    "uploadURL": "…" // the file url, if it was returned
  }
  ```

**Example**

```js
bulky.on("upload-success", (file, response) => {
  console.log(file.name, response.uploadURL);
  const img = new Image();
  img.width = 300;
  img.alt = file.id;
  img.src = response.uploadURL;
  document.body.appendChild(img);
});
```

### `complete`

Fired when all uploads are complete.

The `result` parameter is an object with arrays of `successful` and `failed` files, as in [`bulky.upload()`](#bulky-upload)’s return value.

```js
bulky.on("complete", (result) => {
  console.log("successful files:", result.successful);
  console.log("failed files:", result.failed);
});
```

### `error`

Fired when bulky fails to upload/encode the entire upload. That error is then set to `bulky.getState().error`.

**Parameters**

- `error` - The error object.

**Example**

```js
bulky.on("error", (error) => {
  console.error(error.stack);
});
```

### `upload-error`

Fired each time a single upload has errored.

**Parameters**

- `file` - The [File Object][file objects] for the file whose upload has failed.
- `error` - The error object.
- `response` - an optional parameter with response data from the upload endpoint. It may be undefined or contain different data depending on the uploader plugin in use.

  For `@bulky/xhr-upload`, the shape is:

  ```json
  {
    "status": 200, // HTTP status code (0, 200, 300)
    "body": "…" // response body
  }
  ```

**Example**

```javascript
bulky.on("upload-error", (file, error, response) => {
  console.log("error with file:", file.id);
  console.log("error message:", error);
});
```

If the error is related to network conditions — endpoint unreachable due to firewall or ISP blockage, for instance — the error will have `error.isNetworkError` property set to `true`. Here’s how you can check for network errors:

```javascript
bulky.on("upload-error", (file, error, response) => {
  if (error.isNetworkError) {
    // Let your users know that file upload could have failed
    // due to firewall or ISP issues
    alertUserAboutPossibleFirewallOrISPIssues(error);
  }
});
```

### `upload-retry`

Fired when an upload has been retried (after an error, for example).

**Parameters**

- `fileID` - ID of the file that is being retried.

**Example**

```js
bulky.on("upload-retry", (fileID) => {
  console.log("upload retried:", fileID);
});
```

### `info-visible`

Fired when “info” message should be visible in the UI. By default, `Informer` plugin is displaying these messages (enabled by default in `Dashboard` plugin). You can use this event to show messages in your custom UI:

```javascript
bulky.on("info-visible", () => {
  const { info } = bulky.getState();
  // info: {
  //  isHidden: false,
  //  type: 'error',
  //  message: 'Failed to upload',
  //  details: 'Error description'
  // }
  console.log(`${info.message} ${info.details}`);
});
```

### `info-hidden`

Fired when “info” message should be hidden in the UI. See [`info-visible`](#info-visible).

### `cancel-all`

Fired when [`bulky.cancelAll()`]() is called, all uploads are canceled, files removed and progress is reset.

### `restriction-failed`

Fired when a file violates certain restrictions when added. This event is providing another choice for those who want to customize the behavior of file upload restrictions.

```javascript
bulky.on("restriction-failed", (file, error) => {
  // do some customized logic like showing system notice to users
});
```

### `reset-progress`

Fired when `bulky.resetProgress()` is called, each file has its upload progress reset to zero.

```javascript
bulky.on("reset-progress", () => {
  // progress was reset
});
```

[file objects]: #File-Objects
