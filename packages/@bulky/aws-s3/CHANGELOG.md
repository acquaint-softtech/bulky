# @bulky/aws-s3

## 3.0.4

Released: 2022-10-24
Included in: bulky v3.2.2

- @bulky/aws-s3,@bulky/tus,@bulky/xhr-upload: replace `this.getState().files` with `this.bulky.getState().files` (Artur Paikin / #4167)

## 3.0.3

Released: 2022-10-19
Included in: bulky v3.2.0

- @bulky/aws-s3,@bulky/xhr-upload: fix `Cannot mark a queued request as done` in `MiniXHRUpload` (Antoine du Hamel / #4151)

## 3.0.2

Released: 2022-09-25
Included in: bulky v3.1.0

- @bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/companion-client,@bulky/companion,@bulky/compressor,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/drop-target,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/progress-bar,@bulky/provider-views,@bulky/react,@bulky/redux-dev-tools,@bulky/remote-sources,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/svelte,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/utils,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.0

Released: 2022-08-22
Included in: bulky v3.0.0

- @bulky/aws-s3,@bulky/tus,@bulky/xhr-upload: @bulky/tus, @bulky/xhr-upload, @bulky/aws-s3: `metaFields` -> `allowedMetaFields` (Merlijn Vos / #4023)
- @bulky/aws-s3: aws-s3: fix incorrect comparison for `file-removed` (Merlijn Vos / #3962)
- Switch to ESM

## 3.0.0-beta.3

Released: 2022-08-16
Included in: bulky v3.0.0-beta.5

- @bulky/aws-s3: Export AwsS3UploadParameters & AwsS3Options interfaces (Antonina Vertsinskaya / #3956)

## 3.0.0-beta.2

Released: 2022-07-27
Included in: bulky v3.0.0-beta.3

- @bulky/aws-s3,@bulky/core,@bulky/dashboard,@bulky/store-redux,@bulky/xhr-upload: upgrade `nanoid` to v4 (Antoine du Hamel / #3904)

## 2.2.1

Released: 2022-06-07
Included in: bulky v2.12.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/tus: queue socket token requests for remote files (Merlijn Vos / #3797)

## 2.2.0

Released: 2022-05-30
Included in: bulky v2.11.0

- @bulky/angular,@bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/onedrive,@bulky/progress-bar,@bulky/react,@bulky/redux-dev-tools,@bulky/robodog,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @bulky/aws-s3: fix JSDoc type error (Antoine du Hamel / #3785)
- @bulky/aws-s3: refactor to ESM (Antoine du Hamel / #3673)

## 2.1.0

Released: 2022-05-14
Included in: bulky v2.10.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/core,@bulky/react,@bulky/transloadit,@bulky/tus,@bulky/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)

## 2.0.9

Released: 2022-04-07
Included in: bulky v2.9.2

- @bulky/aws-s3,@bulky/companion-client,@bulky/transloadit,@bulky/utils: Propagate `isNetworkError` through error wrappers (Renée Kooi / #3620)

## 2.0.8

Released: 2022-03-16
Included in: bulky v2.8.0

- @bulky/aws-s3: fix wrong events being sent to companion (Mikael Finstad / #3576)

## 2.0.7

Released: 2021-12-09
Included in: bulky v2.3.1

- @bulky/aws-s3,@bulky/core,@bulky/dashboard,@bulky/store-redux,@bulky/xhr-upload: deps: use `nanoid/non-secure` to workaround react-native limitation (Antoine du Hamel / #3350)

## 2.0.6

Released: 2021-12-07
Included in: bulky v2.3.0

- @bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/google-drive,@bulky/image-editor,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/screen-capture,@bulky/status-bar,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/url,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: Refactor locale scripts & generate types and docs (Merlijn Vos / #3276)
