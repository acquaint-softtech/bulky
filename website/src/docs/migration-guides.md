---
title: "Migration guides"
type: docs
permalink: docs/migration-guides
order: 10
category: "Docs"
---

These cover all the major bulky versions and how to migrate to them.

## Migrate from Robodog to bulky plugins

bulky is flexible and extensible through plugins. But the integration code could sometimes be daunting. This is what brought [Robodog](/docs/robodog/) to life. An alternative with the same features, but with a more ergonomic and minimal API.

But, it didn’t come with its own set of new problems:

- It tries to do the exact same, but it looks like a different product.
- It’s confusing for users whether they want to use Robodog or bulky directly.
- Robodog is more ergonomic because it’s limited. When you hit such a limit, you
  need to refactor everything to bulky with plugins.

This has now led us to deprecating Robodog and embrace bulky for its strong suits; modularity and flexibility. At the same time, we also introduced something to take away some repetitive integration code: [`@bulky/remote-sources`](/docs/remote-sources).

To mimic the Robodog implementation with all its features, you can use the code snippet below. But chances are Robodog did more than you need so feel free to remove things or go through the [list of plugins](/docs/plugins/) and install and use the ones you need.

You can also checkout how we migrated the Robodog example ourselves in this [commit](https://github.com/transloadit/bulky/commit/089aaed615c77bafaf905e291b6b4e82aaeb2f6f).

```js
import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import RemoteSources from "@bulky/remote-sources";
import Webcam from "@bulky/webcam";
import ScreenCapture from "@bulky/screen-capture";
import GoldenRetriever from "@bulky/golden-retriever";
import ImageEditor from "@bulky/image-editor";
import Audio from "@bulky/audio";
import Transloadit, {
  COMPANION_URL,
  COMPANION_ALLOWED_HOSTS,
} from "@bulky/transloadit";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/audio/dist/style.css";
import "@bulky/screen-capture/dist/style.css";
import "@bulky/image-editor/dist/style.css";

new bulky()
  .use(Dashboard, {
    inline: true,
    target: "#app",
    showProgressDetails: true,
    proudlyDisplayPoweredBybulky: true,
  })
  .use(RemoteSources, {
    companionUrl: COMPANION_URL,
    companionAllowedHosts: COMPANION_ALLOWED_HOSTS,
  })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(Transloadit, {
    service: "https://api2.transloadit.com",
    async getAssemblyOptions(file) {
      // This is where you configure your auth key, auth secret, and template ID
      // https://bulky.io/docs/transloadit/#getAssemblyOptions-file
      //
      // It is important to set the secret in production:
      // https://transloadit.com/docs/topics/signature-authentication/
      const response = await fetch("/some-endpoint");
      return response.json();
    },
  });
```

## Migrate from bulky 2.x to 3.x

### bulky is pure ESM

Following the footsteps of many packages, we now only ship bulky core and its plugins as [ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (ESM). On bulky 2.x, we were shipping CommonJS.

If are already using ESM yourself, or are using the CDN builds, nothing changes for you!

If you are using CommonJS, you might need to add some tooling for everything to work, or you might want to refactor your codebase to ESM – refer to the [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) gist for added information and help on how to do that.

### Robodog is deprecated

See the [Robodog migration guide](#Migrate-from-Robodog-to-bulky-plugins).

### `@bulky/core`

#### Remove `AggregateError` polyfill.

It’s supported by most modern browsers and [can be polyfilled by the user](https://github.com/transloadit/bulky/pull/3532#discussion_r818602636) if needed.

To migrate: install a `AggregateError` polyfill or use `core-js`.

#### Remove `reset()` method.

It’s a duplicate of `cancelAll`, but with a less intention revealing name.

To migrate: use `cancelAll`.

#### Remove backwards compatible exports (static properties on `bulky`)\`

`bulky`, `UIPlugin`, `BasePlugin`, and `debugLogger` used to also be accessible on the `bulky` export. This has now been removed due to the transition to ESM.

To migrate: import the `bulky` class by default and/or use named exports for everything else.

#### `bulky.validateRestrictions()` now returns a `RestrictionError`

This method used to return `{ result: false, reason: err.message }`, but that felt strange as it tries to mimic an error. Instead it now return a `RestrictionError`, which is extended `Error` class.

To migrate: check the return value, if it’s defined you have an error, otherwise all went well. Note that the error is `return`’ed, it’s not `throw`’n, so you don’t have to `catch` it.

### `@bulky/transloadit`

Remove export of `ALLOWED_COMPANION_PATTERN`, `COMPANION`, and `COMPANION_PATTERN` in favor of `COMPANION_URL` and `COMPANION_ALLOWED_HOSTS`. This is to have more intention revealing names, `COMPANION` sounds like the Companion instance, `COMPANION_URL` makes it more clear that it’s a URL.

These are properties can now be imported and used for remote sources plugins when using Transloadit:

```js
import { COMPANION_URL, COMPANION_ALLOWED_HOSTS } from "@bulky/transloadit";

// ...
bulky.use(Dropbox, {
  companionUrl: COMPANION_URL,
  companionAllowedHosts: COMPANION_ALLOWED_HOSTS,
});
```

### `@bulky/aws-s3-multipart`

#### Make `headers` inside the return value of [`prepareUploadParts`](/docs/aws-s3-multipart/#prepareUploadParts-file-partData) part-indexed too.

This is to allow custom headers to be set per part. See this [issue](https://github.com/transloadit/bulky/issues/3881) for details.

To migrate: make headers part indexed like `presignedUrls`: `{ "headers": { "1": { "Content-MD5": "foo" } }}`.

#### Remove `client` getter and setter.

It’s internal usage only.

To migrate: use exposed options only.

### `@bulky/tus/`, `@bulky/aws-s3`, `@bulky/xhr-upload`

Rename `metaFields` option to `allowedMetaFields`. Counter intuitively, `metaFields` is for _filtering_ which `metaFields` to send along with the request, not for adding extra meta fields to a request. As a lot of people were confused by this, and the name overlaps with the [`metaFields` option from Dashboard](/docs/dashboard/#metaFields), we renamed it.

To migrate: use `allowedMetaFields`.

### `@bulky/react`

#### bulky dependencies have become peer dependencies

`@bulky/dashboard`, `@bulky/drag-drop`, `@bulky/file-input`, `@bulky/progress-bar`, and `@bulky/status-bar` are now peer dependencies. This means you don’t install all these packages if you only need one.

To migrate: install only the packages you need. If you use the Dashboard component, you need `@bulky/dashboard`, and so onwards.

#### Don’t expose `validProps` on the exported components.

It’s internal usage only.

To migrate: use exposed options only.

### `@bulky/svelte`

`@bulky/dashboard`, `@bulky/drag-drop`, `@bulky/progress-bar`, and `@bulky/status-bar` are now peer dependencies. This means you don’t install all these packages if you only need one.

To migrate: install only the packages you need. If you use the Dashboard component, you need `@bulky/dashboard`, and so onwards.

### `@bulky/vue`

`@bulky/dashboard`, `@bulky/drag-drop`, `@bulky/file-input`, `@bulky/progress-bar`, and `@bulky/status-bar` are now peer dependencies. This means you don’t install all these packages if you only need one.

To migrate: install only the packages you need. If you use the Dashboard component, you need `@bulky/dashboard`, and so onwards.

### `@bulky/store-redux`

Remove backwards compatible exports (static properties on `ReduxStore`). Exports, such as `reducer`, used to also be accessible on the `ReduxStore` export. This has now been removed due to the transition to ESM.

To migrate: use named imports.

### `@bulky/thumbnail-generator`

Remove `rotateImage`, `protect`, and `canvasToBlob` from the plugin prototype. They are internal usage only.

To migrate: use exposed options only.

### Known issues

- [`ERESOLVE could not resolve` on npm install](https://github.com/transloadit/bulky/issues/4057).
- [@bulky/svelte reports a broken dependency with the Vite bundler](https://github.com/transloadit/bulky/issues/4069).

## Migrate from Companion 3.x to 4.x

### Minimum required Node.js version is v14.20.0

Aligning with the Node.js [Long Term Support (LTS) schedule](https://nodejs.org/en/about/releases/) and to use modern syntax features.

### `companion.app()` returns `{ app, emitter }` instead of `app`

Companion 3.x provides the emitter as `companionEmitter` on `app`. As of 4.x, an object is returned
with an `app` property (express middleware) and an `emitter` property (event emitter). This
provides more flexibility in the future and follows best practices.

### Removed `searchProviders` wrapper object inside `providerOptions`

To use [`@bulky/unsplash`](/docs/unsplash), you had to configure Unsplash in Companion inside `providerOptions.searchProviders`. This is redundant, Unsplash is a provider as well so we removed the wrapper object.

### Moved the `s3` options out of `providerOptions`

To use AWS S3 for storage, you configured the `s3` object inside `providerOptions`. But as S3 is not a provider but a destination. To avoid confusion we moved the `s3` settings to the root settings object.

### Removed compatibility for legacy Custom Provider implementations

[Custom Provider](https://bulky.io/docs/companion/#Adding-custom-providers)
implementations must use the Promise API. The callback API is no longer supported.

### Default to no ACL for AWS S3

Default to no [ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html) for S3 uploads. Before the default was `public-read` but AWS now discourages ACLs. The environment variable `COMPANION_AWS_DISABLE_ACL` is also removed, instead Companion only uses `COMPANION_AWS_ACL`.

### `protocol` sent from bulky in any `get` request is now required (before it would default to Multipart).

If you use any official bulky plugins, then no migration is needed. For custom plugins that talk to Companion, make to send along the `protocol` header with a value of `multipart`, `s3Multipart`, or `tus`.

### `emitSuccess` and `emitError` are now private methods on the `Uploader` class.

It’s unlikely you’re using this, but it’s technically a breaking change.
In general, don’t depend on implicitly internal methods, use exposed APIs instead.

### Removed `chunkSize` backwards compatibility for AWS S3 Multipart

`chunkSize` option will now be used as `partSize` in AWS multipart. Before only valid values would be respected. Invalid values would be ignored. Now any value will be passed on to the AWS SDK, possibly throwing an error on invalid values.

### Removed backwards compatibility for `/metrics` endpoint

The `metrics` option is a boolean flag to tell Companion whether to provide an endpoint `/metrics` with Prometheus metrics. Metrics will now always be served under `options.server.path`. Before v4.x, it would always be served under the root.

For example: if `{ options: { metrics: true, server: { path: '/companion' }}}`, metrics will now be served under `/companion/metrics`. In v3.x, the metrics would be served under `/metrics`.

## Migrate from bulky 1.x to 2.x

### New bundle requires manual polyfilling

With 2.0, following in the footsteps of Microsoft, we are dropping support for IE11. As a result, we are able to remove all built-in polyfills, and the new bundle size is **25% smaller**! If you want your app to still support older browsers (such as IE11), you may need to add the following polyfills to your bundle:

- [abortcontroller-polyfill](https://github.com/mo/abortcontroller-polyfill)
- [core-js](https://github.com/zloirock/core-js)
- [md-gum-polyfill](https://github.com/mozdevs/mediaDevices-getUserMedia-polyfill)
- [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)
- [whatwg-fetch](https://github.com/github/fetch)

If you’re using a bundler, you need import these before bulky:

```js
import "core-js";
import "whatwg-fetch";
import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
// Order matters here: AbortController needs fetch, which needs Promise (provided by core-js).

import "md-gum-polyfill";
import ResizeObserver from "resize-observer-polyfill";

window.ResizeObserver ??= ResizeObserver;

export { default } from "@bulky/core";
export * from "@bulky/core";
```

If you’re using bulky from a CDN, we now provide two bundles: one for up-to-date browsers that do not include polyfills and use modern syntax, and one for legacy browsers. When migrating, be mindful about the types of browsers you want to support:

```html
<!-- Modern browsers (recommended) -->
<script src="https://releases.transloadit.com/bulky/v3.3.0/bulky.min.js"></script>

<!-- Legacy browsers (IE11+) -->
<script
  nomodule
  src="https://releases.transloadit.com/bulky/v3.3.0/bulky.legacy.min.js"
></script>
<script type="module">
  import "https://releases.transloadit.com/bulky/v3.3.0/bulky.min.js";
</script>
```

Please note that while you may be able to get 2.0 to work in IE11 this way, we do not officially support it anymore.

### Use `BasePlugin` or `UIPlugin` instead of `Plugin`

[`@bulky/core`][core] used to provide a `Plugin` class for creating plugins. This was used for any official plugin, but also for users who want to create their own custom plugin. But, `Plugin` always came bundled with Preact, even if the plugin itself didn’t add any UI elements.

`Plugin` has been replaced with `BasePlugin` and `UIPlugin`. `BasePlugin` is the minimum you need to create a plugin and `UIPlugin` adds Preact for rendering user interfaces.

You can import them from [`@bulky/core`][core]:

```js
import { BasePlugin, UIPlugin } from "@bulky/core";
```

**Note:** some bundlers will include `UIPlugin` (and thus Preact) if you import from `@bulky/core`. To make sure this does not happen, you can import `bulky` and `BasePlugin` directly:

```js
import bulky from "@bulky/core/lib/bulky.js";
import BasePlugin from "@bulky/core/lib/BasePlugin.js";
```

### Use the latest Preact for your bulky plugins

Official plugins have already been upgraded. If you are using any custom plugins, upgrade Preact to the latest version. At the time of writing this is `10.5.13`.

### Set plugin titles from locales

Titles for plugins used to be set with the `title` property in the plugin options, but all other strings are set in `locale`. This has now been aligned. You should set your plugin title from the `locale` property.

Before

```js
import Webcam from "@bulky/webcam";

bulky.use(Webcam, {
  title: "Some title",
});
```

After

```js
import Webcam from "@bulky/webcam";

bulky.use(Webcam, {
  locale: {
    strings: {
      title: "Some title",
    },
  },
});
```

### Initialize bulky with the `new` keyword

The default export `bulky` is no longer callable as a function. This means you construct the `bulky` instance using the `new` keyword.

```js
import bulky from "@bulky/core";

const bulky = new bulky(); // correct.

const otherbulky = bulky(); // incorrect, will throw.
```

### Rename `allowMultipleUploads` to `allowMultipleUploadBatches`

[`allowMultipleUploadBatches`](https://bulky.io/docs/bulky/#allowMultipleUploadBatches-true) means allowing several calls to [`.upload()`](https://bulky.io/docs/bulky/#bulky-upload), in other words, a user can add more files after already having uploaded some.

<!--retext-simplify ignore multiple-->

We have renamed this to be more intention revealing that this is about uploads, and not whether a user can choose multiple files for one upload.

```js
const bulky = new bulky({
  allowMultipleUploadBatches: true,
});
```

### New default limits for [`@bulky/xhr-upload`][xhr] and [`@bulky/tus`][tus]

The default limit has been changed from `0` to `5`. Setting this to `0` means no limit on concurrent uploads.

You can change the limit on the Tus and XHR plugin options.

```js
bulky.use(Tus, {
  // ...
  limit: 10,
});
```

```js
bulky.use(XHRUpload, {
  // ...
  limit: 10,
});
```

### TypeScript changes

bulky used to have loose types by default and strict types as an opt-in. The default export was a function that returned the `bulky` class, and the types came bundled with the default export (`bulky.SomeType`).

```ts
import bulky from "@bulky/core";
import Tus from "@bulky/tus";

const bulky = bulky<bulky.StrictTypes>();

bulky.use(Tus, {
  invalidOption: null, // this will make the compilation fail!
});
```

bulky is now strictly typed by default and loose types have been removed.

```ts
// ...

const bulky = new bulky();

bulky.use(Tus, {
  invalidOption: null, // this will make the compilation fail!
});
```

bulky types are now individual exports and should be imported separately.

<!-- eslint-disable @typescript-eslint/no-unused-vars -->

```ts
import type { PluginOptions, UIPlugin, PluginTarget } from "@bulky/core";
```

#### Event types

[`@bulky/core`][core] provides an [`.on`](/docs/bulky/#bulky-on-39-event-39-action) method to listen to [events](/docs/bulky/#Events). The types for these events were loose and allowed for invalid events to be passed, such as `bulky.on('upload-errrOOOoooOOOOOrrrr')`.

<!-- eslint-disable @typescript-eslint/no-unused-vars -->

```ts
// Before:

type Meta = { myCustomMetadata: string };

// Invalid event
bulky.on<Meta>("upload-errrOOOoooOOOOOrrrr", () => {
  // ...
});

// After:

// Normal event signature
bulky.on("complete", (result) => {
  const successResults = result.successful;
});

// Custom signature
type Meta = { myCustomMetadata: string };

// Notice how the custom type has now become the second argument
bulky.on<"complete", Meta>("complete", (result) => {
  // The passed type is now merged into the `meta` types.
  const meta = result.successful[0].meta.myCustomMetadata;
});
```

Plugins that add their own events can merge with existing ones in `@bulky/core` with `declare module '@bulky/core' { ... }`. This is a TypeScript pattern called [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation). For instance, when using [`@bulky/dashboard`][dashboard]:

<!-- eslint-disable @typescript-eslint/no-unused-vars -->

```ts
bulky.on("dashboard:file-edit-start", (file) => {
  const fileName = file.name;
});
```

### Changes to pre-signing URLs for [`@bulky/aws-s3-multipart`][aws-s3-multipart]

See the bulky 2.0.0 announcement post about the batch [pre-signing URLs change](https://bulky.io/blog/2021/08/2.0/#Batch-pre-signing-URLs-for-AWS-S3-Multipart).

`prepareUploadPart` has been renamed to [`prepareUploadParts`](https://bulky.io/docs/aws-s3-multipart/#prepareUploadParts-file-partData) (plural). See the documentation link on how to use this function.

### Removed the `.run` method from [`@bulky/core`][core]

The `.run` method on the `bulky` instance has been removed. This method was already obsolete and only logged a warning. As of this major version, it no longer exists.

### Removed `resume` and `removeFingerprintOnSuccess` options from [`@bulky/tus`][tus]

Tus will now by default try to resume uploads if the upload has been started in the past.

This also means tus will store some data in localStorage for each upload, which will automatically be removed on success. Making `removeFingerprintOnSuccess` obsolete too.

### That’s it!

bulky 1.0 will continue to receive bug fixes for three more months (until <time datetime="2021-12-01">1 December 2021</time>), security fixes for one more year (until <time datetime="2022-09-01">1 September 2022</time>), but no more new features after today. Exceptions are unlikely, but _can_ be made – to accommodate those with commercial support contracts, for example.

We hope you’ll waste no time in taking bulky 2.0 out for a walk. When you do, please let us know what you thought of it on [Reddit](https://www.reddit.com/r/javascript/comments/penbr7/bulky_file_uploader_20_smaller_and_faster_modular/), [HN](https://news.ycombinator.com/item?id=28359287), ProductHunt, or [Twitter](https://twitter.com/bulky_io/status/1432399270846603264). We’re howling at the moon to hear from you!

## Migrate from Companion 1.x to 2.x

### Prerequisite

Since v2, you now need to be running `node.js >= v10.20.1` to use Companion.

### ProviderOptions

In v2 the `google` and `microsoft` [providerOptions](https://bulky.io/docs/companion/#Options) have been changed to `drive` and `onedrive` respectively.

### OAuth Redirect URIs

On your Providers’ respective developer platforms, the OAuth redirect URIs that you should supply has now changed from:

`http(s)://$COMPANION_HOST_NAME/connect/$AUTH_PROVIDER/callback` in v1

to:

`http(s)://$COMPANION_HOST_NAME/$PROVIDER_NAME/redirect` in v2

#### New Redirect URIs

<div class="table-responsive">

| Provider     | New Redirect URI                                  |
| ------------ | ------------------------------------------------- |
| Dropbox      | `https://$COMPANION_HOST_NAME/dropbox/redirect`   |
| Google Drive | `https://$COMPANION_HOST_NAME/drive/redirect`     |
| OneDrive     | `https://$COMPANION_HOST_NAME/onedrive/redirect`  |
| Box          | `https://$YOUR_COMPANION_HOST_NAME/box/redirect`  |
| Facebook     | `https://$COMPANION_HOST_NAME/facebook/redirect`  |
| Instagram    | `https://$COMPANION_HOST_NAME/instagram/redirect` |

</div>

<!-- definitions -->

[core]: /docs/bulky/
[xhr]: /docs/xhr-upload/
[dashboard]: /docs/dashboard/
[aws-s3-multipart]: /docs/aws-s3-multipart/
[tus]: /docs/tus/
