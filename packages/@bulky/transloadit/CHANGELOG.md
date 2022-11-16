# @bulky/transloadit

## 3.0.2

Released: 2022-09-25
Included in: bulky v3.1.0

- @bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/companion-client,@bulky/companion,@bulky/compressor,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/drop-target,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/progress-bar,@bulky/provider-views,@bulky/react,@bulky/redux-dev-tools,@bulky/remote-sources,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/svelte,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/utils,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.1

Released: 2022-08-30
Included in: bulky v3.0.1

- @bulky/transloadit: improve deprecation notice (Antoine du Hamel / #4056)

## 3.0.0

Released: 2022-08-22
Included in: bulky v3.0.0

- Switch to ESM

## 3.0.0-beta.4

Released: 2022-08-03
Included in: bulky v3.0.0-beta.4

- @bulky/transloadit: remove static properties in favor of exports (Antoine du Hamel / #3927)

## 3.0.0-beta

Released: 2022-05-30
Included in: bulky v3.0.0-beta

- @bulky/transloadit: remove IE 10 hack (Antoine du Hamel / #3777)

## 2.3.6

Released: 2022-08-02
Included in: bulky v2.13.2

- @bulky/transloadit: send `assembly-cancelled` only once (Antoine du Hamel / #3937)

## 2.3.5

Released: 2022-07-27
Included in: bulky v2.13.1

- @bulky/transloadit: cancel assemblies when all its files have been removed (Antoine du Hamel / #3893)

## 2.3.4

Released: 2022-07-18
Included in: bulky v2.13.0

- @bulky/transloadit: fix outdated file ids and incorrect usage of files (Merlijn Vos / #3886)

## 2.3.3

Released: 2022-07-11
Included in: bulky v2.12.3

- @bulky/transloadit: fix TypeError when file is cancelled asynchronously (Antoine du Hamel / #3872)
- @bulky/robodog,@bulky/transloadit: use modern syntax to simplify code (Antoine du Hamel / #3873)

## 2.3.2

Released: 2022-07-06
Included in: bulky v2.12.2

- @bulky/locales,@bulky/transloadit: Fix undefined error in in onTusError (Merlijn Vos / #3848)

## 2.3.1

Released: 2022-06-09
Included in: bulky v2.12.1

- @bulky/transloadit: fix `COMPANION_PATTERN` export (Antoine du Hamel / #3820)

## 2.3.0

Released: 2022-05-30
Included in: bulky v2.11.0

- @bulky/angular,@bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/onedrive,@bulky/progress-bar,@bulky/react,@bulky/redux-dev-tools,@bulky/robodog,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @bulky/transloadit: refactor to ESM (Antoine du Hamel / #3725)
- @bulky/transloadit: transloadit: propagate error details when creating Assembly fails (Renée Kooi / #3794)

## 2.2.0

Released: 2022-05-14
Included in: bulky v2.10.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/core,@bulky/react,@bulky/transloadit,@bulky/tus,@bulky/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @bulky/transloadit: add rate limiting for assembly creation and status polling (Antoine du Hamel / #3718)

## 2.1.5

Released: 2022-04-27
Included in: bulky v2.9.4

- @bulky/transloadit: improve fetch error handling (Antoine du Hamel / #3637)

## 2.1.4

Released: 2022-04-07
Included in: bulky v2.9.2

- @bulky/aws-s3,@bulky/companion-client,@bulky/transloadit,@bulky/utils: Propagate `isNetworkError` through error wrappers (Renée Kooi / #3620)

## 2.1.2

Released: 2022-03-24
Included in: bulky v2.9.0

- @bulky/transloadit: close assembly if upload is cancelled (Antoine du Hamel / #3591)

## 2.1.1

Released: 2022-01-12
Included in: bulky v2.4.1

- @bulky/transloadit: fix handling of Tus errors and rate limiting (Antoine du Hamel / #3429)
- @bulky/transloadit: simplify `#onTusError` (Antoine du Hamel / #3419)

## 2.1.0

Released: 2022-01-10
Included in: bulky v2.4.0

- @bulky/transloadit: ignore rate limiting errors when polling (Antoine du Hamel / #3418)
- @bulky/transloadit: better defaults for rate limiting (Antoine du Hamel / #3414)

## 2.0.5

Released: 2021-12-07
Included in: bulky v2.3.0

- @bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/google-drive,@bulky/image-editor,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/screen-capture,@bulky/status-bar,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/url,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: Refactor locale scripts & generate types and docs (Merlijn Vos / #3276)
