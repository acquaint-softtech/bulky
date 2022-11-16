# @bulky/aws-s3-multipart

## 3.1.0

Released: 2022-11-10
Included in: bulky v3.3.0

- @bulky/aws-s3-multipart: empty the queue when pausing (Antoine du Hamel / #4203)
- @bulky/aws-s3-multipart: refactor rate limiting approach (Antoine du Hamel / #4187)
- @bulky/aws-s3-multipart: change limit to 6 (Antoine du Hamel / #4199)
- @bulky/aws-s3-multipart: remove unused `timeout` option (Antoine du Hamel / #4186)
- @bulky/aws-s3-multipart,@bulky/tus: fix `Timed out waiting for socket` (Antoine du Hamel / #4177)

## 3.0.2

Released: 2022-09-25
Included in: bulky v3.1.0

- @bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/companion-client,@bulky/companion,@bulky/compressor,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/drop-target,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/progress-bar,@bulky/provider-views,@bulky/react,@bulky/redux-dev-tools,@bulky/remote-sources,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/svelte,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/utils,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.0

Released: 2022-08-22
Included in: bulky v3.0.0

- Switch to ESM

## 3.0.0-beta.4

Released: 2022-08-16
Included in: bulky v3.0.0-beta.5

- @bulky/aws-s3-multipart: Fix when using Companion (Merlijn Vos / #3969)
- @bulky/aws-s3-multipart: Fix race condition in `#uploadParts` (Morgan Zolob / #3955)
- @bulky/aws-s3-multipart: ignore exception inside `abortMultipartUpload` (Antoine du Hamel / #3950)

## 3.0.0-beta.3

Released: 2022-08-03
Included in: bulky v3.0.0-beta.4

- @bulky/aws-s3-multipart: Correctly handle errors for `prepareUploadParts` (Merlijn Vos / #3912)

## 3.0.0-beta.2

Released: 2022-07-27
Included in: bulky v3.0.0-beta.3

- @bulky/aws-s3-multipart: make `headers` part indexed too in `prepareUploadParts` (Merlijn Vos / #3895)

## 2.4.1

Released: 2022-06-07
Included in: bulky v2.12.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/tus: queue socket token requests for remote files (Merlijn Vos / #3797)
- @bulky/aws-s3-multipart: allow `companionHeaders` to be modified with `setOptions` (Paulo Lemos Neto / #3770)

## 2.4.0

Released: 2022-05-30
Included in: bulky v2.11.0

- @bulky/angular,@bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/onedrive,@bulky/progress-bar,@bulky/react,@bulky/redux-dev-tools,@bulky/robodog,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @bulky/aws-s3-multipart: refactor to ESM (Antoine du Hamel / #3672)

## 2.3.0

Released: 2022-05-14
Included in: bulky v2.10.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/core,@bulky/react,@bulky/transloadit,@bulky/tus,@bulky/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @bulky/aws-s3-multipart: export interface AwsS3MultipartOptions (Matteo Padovano / #3709)

## 2.2.2

Released: 2022-04-27
Included in: bulky v2.9.4

- @bulky/aws-s3-multipart: Add `companionCookiesRule` type to @bulky/aws-s3-multipart (Mauricio Ribeiro / #3623)

## 2.2.1

Released: 2022-03-02
Included in: bulky v2.7.0

- @bulky/aws-s3-multipart: Add chunks back to prepareUploadParts, indexed by partNumber (Kevin West / #3520)

## 2.2.0

Released: 2021-12-07
Included in: bulky v2.3.0

- @bulky/aws-s3-multipart: Drop `lockedCandidatesForBatch` and mark chunks as 'busy' when preparing (Yegor Yarko / #3342)
