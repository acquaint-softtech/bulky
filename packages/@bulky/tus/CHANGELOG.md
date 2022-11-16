# @bulky/tus

## 3.0.5

Released: 2022-11-10
Included in: bulky v3.3.0

- @bulky/aws-s3-multipart,@bulky/tus: fix `Timed out waiting for socket` (Antoine du Hamel / #4177)

## 3.0.4

Released: 2022-10-24
Included in: bulky v3.2.2

- @bulky/aws-s3,@bulky/tus,@bulky/xhr-upload: replace `this.getState().files` with `this.bulky.getState().files` (Artur Paikin / #4167)

## 3.0.2

Released: 2022-09-25
Included in: bulky v3.1.0

- @bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/companion-client,@bulky/companion,@bulky/compressor,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/drop-target,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/progress-bar,@bulky/provider-views,@bulky/react,@bulky/redux-dev-tools,@bulky/remote-sources,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/svelte,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/utils,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.0

Released: 2022-08-22
Included in: bulky v3.0.0

- @bulky/aws-s3,@bulky/tus,@bulky/xhr-upload: @bulky/tus, @bulky/xhr-upload, @bulky/aws-s3: `metaFields` -> `allowedMetaFields` (Merlijn Vos / #4023)
- @bulky/tus: avoid crashing when Tus client reports an error (Antoine du Hamel / #4019)
- @bulky/tus: fix dependencies (Antoine du Hamel / #3923)
- @bulky/tus: add file argument to `onBeforeRequest` (Merlijn Vos / #3984)
- Switch to ESM

## 3.0.0-beta.2

Released: 2022-08-03
Included in: bulky v3.0.0-beta.4

- @bulky/companion,@bulky/tus: Upgrade tus-js-client to 3.0.0 (Merlijn Vos / #3942)

## 2.4.2

Released: 2022-08-02
Included in: bulky v2.13.2

- @bulky/tus: fix dependencies (Antoine du Hamel / #3923)

## 2.4.1

Released: 2022-06-07
Included in: bulky v2.12.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/tus: queue socket token requests for remote files (Merlijn Vos / #3797)
- @bulky/tus: make onShouldRetry type optional (Merlijn Vos / #3800)

## 2.4.0

Released: 2022-05-30
Included in: bulky v2.11.0

- @bulky/angular,@bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/onedrive,@bulky/progress-bar,@bulky/react,@bulky/redux-dev-tools,@bulky/robodog,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @bulky/tus: Add `onShouldRetry` as option to @bulky/tus (Merlijn Vos / #3720)
- @bulky/tus: fix broken import (Antoine du Hamel / #3729)
- @bulky/tus: fixup! @bulky/tus: wait for user promise on beforeRequest (Antoine du Hamel / #3712)
- @bulky/tus: wait for user promise on beforeRequest (Antoine du Hamel / #3712)

## 2.3.0

Released: 2022-05-14
Included in: bulky v2.10.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/core,@bulky/react,@bulky/transloadit,@bulky/tus,@bulky/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @bulky/tus: refactor to ESM (Antoine du Hamel / #3724)

## 2.2.2

Released: 2022-03-29
Included in: bulky v2.9.1

- @bulky/tus: fix hasOwn (Mikael Finstad / #3604)

## 2.2.1

Released: 2022-03-24
Included in: bulky v2.9.0

- @bulky/tus: fix double requests sent when rate limiting (Antoine du Hamel / #3595)

## 2.2.0

Released: 2022-01-10
Included in: bulky v2.4.0

- @bulky/tus: pause all requests in response to server rate limiting (Antoine du Hamel / #3394)
