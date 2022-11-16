# @bulky/companion

## 4.1.0

Released: 2022-11-10
Included in: bulky v3.3.0

- @bulky/companion: change default S3 expiry from 300 to 800 seconds (Merlijn Vos / #4206)
- @bulky/companion: send expiry time along side S3 signed requests (Antoine du Hamel / #4202)

## 4.0.4

Released: 2022-10-19
Included in: bulky v3.2.0

- @bulky/companion: add workaround for S3 accelerated endpoints (Mikael Finstad / #4140)
- @bulky/companion: fix error message (Mikael Finstad / #4125)

## 4.0.2

Released: 2022-09-25
Included in: bulky v3.1.0

- @bulky/companion: Companion throttle progress by time (Mikael Finstad / #4101)
- @bulky/audio,@bulky/aws-s3-multipart,@bulky/aws-s3,@bulky/box,@bulky/companion-client,@bulky/companion,@bulky/compressor,@bulky/core,@bulky/dashboard,@bulky/drag-drop,@bulky/drop-target,@bulky/dropbox,@bulky/facebook,@bulky/file-input,@bulky/form,@bulky/golden-retriever,@bulky/google-drive,@bulky/image-editor,@bulky/informer,@bulky/instagram,@bulky/locales,@bulky/onedrive,@bulky/progress-bar,@bulky/provider-views,@bulky/react,@bulky/redux-dev-tools,@bulky/remote-sources,@bulky/screen-capture,@bulky/status-bar,@bulky/store-default,@bulky/store-redux,@bulky/svelte,@bulky/thumbnail-generator,@bulky/transloadit,@bulky/tus,@bulky/unsplash,@bulky/url,@bulky/utils,@bulky/vue,@bulky/webcam,@bulky/xhr-upload,@bulky/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 4.0.1

Released: 2022-08-30
Included in: bulky v3.0.1

- @bulky/companion: Fix Companion license (Merlijn Vos / #4044)

## 4.0.0

Released: 2022-08-22
Included in: bulky v3.0.0

- Switch to ESM

## 4.0.0-beta.4

Released: 2022-08-16
Included in: bulky v3.0.0-beta.5

- @bulky/companion: Companion: bring back default upload protocol (Mikael Finstad / #3967)
- @bulky/companion: enforce usage of uploadUrls (Mikael Finstad / #3965)
- @bulky/companion: fix crash if redis disconnects (Mikael Finstad / #3954)
- @bulky/companion: upgrade `ws` version (Antoine du Hamel / #3949)
- @bulky/companion: sort Dropbox response & refactor to async/await (Mikael Finstad / #3897)
- @bulky/companion: fix default getKey for non-standalone too (Mikael Finstad / #3945)
- @bulky/companion: remove `isobject` from dependencies (Antoine du Hamel / #3948)
- @bulky/companion: show deprecation message when using legacy s3 options (Antoine du Hamel / #3944)

## 4.0.0-beta.3

Released: 2022-08-03
Included in: bulky v3.0.0-beta.4

- @bulky/companion,@bulky/tus: Upgrade tus-js-client to 3.0.0 (Merlijn Vos / #3942)

## 4.0.0-beta.2

Released: 2022-07-27
Included in: bulky v3.0.0-beta.3

- @bulky/companion: update minimal supported Node.js version in the docs (Antoine du Hamel / #3902)
- @bulky/companion: upgrade `redis` to version 4.x (Antoine du Hamel / #3589)
- @bulky/companion: remove unnecessary ts-ignores (Mikael Finstad / #3900)
- @bulky/companion: remove `COMPANION_S3_GETKEY_SAFE_BEHAVIOR` env variable (Antoine du Hamel / #3869)

## 4.0.0-beta.1

Released: 2022-07-06
Included in: bulky v3.0.0-beta.2

- @bulky/companion: remove deprecated duplicated metrics (Mikael Finstad / #3833)
- @bulky/companion: Companion 3 default to no s3 acl (Mikael Finstad / #3826)
- @bulky/companion: rewrite companion.app() to return an object (Mikael Finstad / #3827)
- @bulky/companion: remove companion provider compat api (Mikael Finstad / #3828)
- @bulky/companion: rewrite code for node >=14 (Mikael Finstad / #3829)
- @bulky/companion: remove chunkSize backwards compatibility (Mikael Finstad / #3830)
- @bulky/companion: Companion: make `emitSuccess` and `emitError` private (Mikael Finstad / #3832)
- @bulky/companion: do not use a default upload protocol (Mikael Finstad / #3834)

## 4.0.0-beta

Released: 2022-05-30
Included in: bulky v3.0.0-beta

- @bulky/companion: remove `searchProviders` wrapper & move `s3` options (Merlijn Vos / #3781)
- @bulky/companion: remove support for EOL versions of Node.js (Antoine du Hamel / #3784)

## 3.7.1

Released: 2022-07-27
Included in: bulky v2.13.1

- @bulky/companion: Companion app type (Mikael Finstad / #3899)

## 3.7.0

Released: 2022-07-06
Included in: bulky v2.12.2

- @bulky/companion: Getkey safe behavior (Mikael Finstad / #3592)
- @bulky/companion: doc: fix Google Drive example (Antoine du Hamel / #3855)
- @bulky/companion: build an ARM64 container (Stuart Auld / #3841)

## 3.6.0

Released: 2022-05-30
Included in: bulky v2.11.0

- @bulky/companion: expire redis keys after 1 day (Mikael Finstad / #3771)
- @bulky/companion: fix some linter warnings (Antoine du Hamel / #3752)

## 3.5.2

Released: 2022-04-27
Included in: bulky v2.9.5

- @bulky/companion: Bump moment from 2.29.1 to 2.29.2 (dependabot[bot] / #3635)

## 3.5.0

Released: 2022-03-24
Included in: bulky v2.9.0

- @bulky/companion: Companion server upload events (Mikael Finstad / #3544)
- @bulky/companion: fix `yarn test` command (Antoine du Hamel / #3590)
- @bulky/companion: Allow setting no ACL (Mikael Finstad / #3577)
- @bulky/companion: Small companion code and doc changes (Mikael Finstad / #3586)

## 3.4.0

Released: 2022-03-16
Included in: bulky v2.8.0

- @bulky/companion: always log errors with stack trace (Mikael Finstad / #3573)
- @bulky/companion: Companion refactor (Mikael Finstad / #3542)
- @bulky/companion: Fetch all Google Drive shared drives (Robert DiMartino / #3553)
- @bulky/companion: Order Google Drive results by folder to show all folders first (Robert DiMartino / #3546)
- @bulky/companion: upgrade node-redis-pubsub (Mikael Finstad / #3541)
- @bulky/companion: reorder reqToOptions (Antoine du Hamel / #3530)

## 3.3.1

Released: 2022-03-02
Included in: bulky v2.7.0

- @bulky/companion: fix unstable test (Mikael Finstad)
- @bulky/companion: replace debug (Mikael Finstad)
- @bulky/companion: Fix COMPANION_PATH (Mikael Finstad / #3515)
- @bulky/companion: Upload protocol "s3-multipart" does not use the chunkSize option (Gabi Ganam / #3511)

## 3.3.0

Released: 2022-02-17
Included in: bulky v2.6.0

- @bulky/companion: fix unpslash author meta, sanitize metadata to strings and improve companion tests (Mikael Finstad / #3478)

## 3.2.1

Released: 2022-02-16
Included in: bulky v2.5.1

- @bulky/companion: fix periodicPingUrls oops (Mikael Finstad / #3490)

## 3.2.0

Released: 2022-02-14
Included in: bulky v2.5.0

- @bulky/companion: add support for COMPANION_UNSPLASH_SECRET (Mikael Finstad / #3463)
- @bulky/companion-client,@bulky/companion,@bulky/provider-views,@bulky/robodog: Finishing touches on Companion dynamic Oauth (Renée Kooi / #2802)
- @bulky/companion: fix broken thumbnails for box and dropbox (Mikael Finstad / #3460)
- @bulky/companion: Implement periodic ping functionality (Mikael Finstad / #3246)
- @bulky/companion: fix callback urls (Mikael Finstad / #3458)
- @bulky/companion: Fix TypeError when invalid initialization vector (Julian Gruber / #3416)
- @bulky/companion: Default to HEAD requests when the Companion looks to get meta information about a URL (Zack Bloom / #3417)

## 3.1.5

Released: 2022-01-04
Included in: bulky v2.3.3

- @bulky/companion: improve private ip check (Mikael Finstad / #3403)

## 3.1.4

Released: 2021-12-21
Included in: bulky v2.3.2

- @bulky/angular,@bulky/companion,@bulky/svelte,@bulky/vue: add `.npmignore` files to ignore `.gitignore` when packing (Antoine du Hamel / #3380)
- @bulky/companion: Upgrade ws in companion (Merlijn Vos / #3377)

## 3.1.3

Released: 2021-12-09
Included in: bulky v2.3.1

- @bulky/companion: fix Dockerfile and deploy automation (Mikael Finstad / #3355)
- @bulky/companion: don't pin Yarn version in `package.json` (Antoine du Hamel / #3347)

## 3.1.2

Released: 2021-12-07
Included in: bulky v2.3.0

- @bulky/companion: fix deploy Yarn version (Antoine du Hamel / #3327)
- @bulky/companion: upgrade aws-sdk (Mikael Finstad / #3334)
- @bulky/companion: Remove references of incorrect `options` argument for `companion.socket` (Mikael Finstad / #3307)
- @bulky/companion: Upgrade linting to 2.0.0-0 (Kevin van Zonneveld / #3280)
