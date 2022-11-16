# @bulky/core

## 3.0.4

Released: 2022-10-24
Included in: bulky v3.2.2

- @bulky/core: make cancel() and close() arguments optional in types (Merlijn Vos / #4161)

## 3.0.3

Released: 2022-10-19
Included in: bulky v3.2.0

- @bulky/core: do not crash if a file is removed before the upload starts (Antoine du Hamel / #4148)
- @bulky/core: Fix bulky.cancelAll and bulky.close types (Sven Grunewaldt / #4128)

## 3.0.2

Released: 2022-09-25
Included in: bulky v3.1.0

- @bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/companion-client,@bulky/companion,@bulky/compressor,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/drop-target,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/progress-bar,@bulky/provider-views,@bulky/react,@bulky/redux-dev-tools,@bulky/remote-sources,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/svelte,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/utils,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)
- @bulky/core: Fix `Restrictor` counts ghost files against `maxNumberOfFiles` (Andrew McIntee / #4078)
- @bulky/core: fix types (Antoine du Hamel / #4072)

## 3.0.1

Released: 2022-08-30
Included in: bulky v3.0.1

- @bulky/core,@bulky/dashboard,@bulky/thumbnail-generator: update definition type files for TS 4.8 compatibility (Antoine du Hamel / #4055)

## 3.0.0

Released: 2022-08-22
Included in: bulky v3.0.0

- @bulky/core: core: bulky.addFile should accept browser File objects (Artur Paikin / #4020)
- @bulky/core,@bulky/dashboard,@bulky/status-bar: Style tweaks: use all: initial + other resets (Artur Paikin / #3983)
- Switch to ESM

## 3.0.0-beta.4

Released: 2022-08-16
Included in: bulky v3.0.0-beta.5

- @bulky/core,@bulky/react: Fix all breaking todo comments for 3.0 (Merlijn Vos / #3907)

## 3.0.0-beta.2

Released: 2022-07-27
Included in: bulky v3.0.0-beta.3

- @bulky/aws-s3,@bulky/core,@bulky/dashboard,@bulky/store-redux,@bulky/xhr-upload: upgrade `nanoid` to v4 (Antoine du Hamel / #3904)

## 3.0.0-beta.1

Released: 2022-06-09
Included in: bulky v3.0.0-beta.1

- @bulky/core,@bulky/dashboard: fix types for some events (Antoine du Hamel / #3812)

## 2.3.2

Released: 2022-07-27
Included in: bulky v2.13.1

- @bulky/core: Add missing type for retry-all event (Luc Boissaye / #3901)

## 2.3.1

Released: 2022-06-07
Included in: bulky v2.12.0

- @bulky/core: fix `TypeError` when file was deleted (Antoine du Hamel / #3811)

## 2.3.0

Released: 2022-05-30
Included in: bulky v2.11.0

- @bulky/angular,@bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/onedrive,@bulky/progress-bar,@bulky/react,@bulky/redux-dev-tools,@bulky/robodog,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @bulky/core: refactor to ESM (Antoine du Hamel / #3744)

## 2.2.0

Released: 2022-05-14
Included in: bulky v2.10.0

- @bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/core,@bulky/react,@bulky/transloadit,@bulky/tus,@bulky/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @bulky/core: add definition for addFiles method (Matteo Padovano / #3556)
- @bulky/core: wrap plugins in div.bulky-Root and set dir attrubute in UIPlugin (Artur Paikin / #3692)

## 2.1.10

Released: 2022-04-27
Included in: bulky v2.9.5

- @bulky/core: fix `TypeError` when file was removed (Antoine du Hamel / #3670)

## 2.1.9

Released: 2022-04-27
Included in: bulky v2.9.4

- @bulky/core: fix `TypeError` when file was removed (Antoine du Hamel / #3650)

## 2.1.8

Released: 2022-04-07
Included in: bulky v2.9.3

- @bulky/core: fix TypeError in event handler when file was removed (Antoine du Hamel / #3629)

## 2.1.7

Released: 2022-03-29
Included in: bulky v2.9.1

- @bulky/core: refactor: replace deprecated String.prototype.substr() (CommanderRoot / #3600)

## 2.1.6

Released: 2022-03-16
Included in: bulky v2.8.0

- @bulky/core: Abstract restriction logic in a new Restricter class (Merlijn Vos / #3532)

## 2.1.5

Released: 2022-02-14
Included in: bulky v2.5.0

- @bulky/core,@bulky/dashboard,@bulky/thumbnail-generator: Add dashboard and UIPlugin types (Merlijn Vos / #3426)

## 2.1.4

Released: 2021-12-09
Included in: bulky v2.3.1

- @bulky/aws-s3,@bulky/core,@bulky/dashboard,@bulky/store-redux,@bulky/xhr-upload: deps: use `nanoid/non-secure` to workaround react-native limitation (Antoine du Hamel / #3350)

## 2.1.3

Released: 2021-12-07
Included in: bulky v2.3.0

- @bulky/core: disable loose transpilation for legacy bundle (Antoine du Hamel / #3329)
- @bulky/aws-s3,@bulky/box,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/google-drive,@bulky/image-editor,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/screen-capture,@bulky/status-bar,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/url,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: Refactor locale scripts & generate types and docs (Merlijn Vos / #3276)
