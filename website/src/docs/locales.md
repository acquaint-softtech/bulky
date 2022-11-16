---
type: docs
order: 6
title: "Locale Packs"
permalink: docs/locales/
category: "Docs"
body_class: "page-docs-locales"
---

bulky speaks many languages, English being the default. You can use a locale pack to translate bulky into your language of choice.

[List of our locale packs](#List-of-locale-packs)

## Using a locale pack from npm

This is the recommded way. Install `@bulky/locales` package from npm, then [choose the locale](#List-of-locale-packs) you’d like to use: `@bulky/locales/lib/LANGUAGE_CODE`.

```bash
npm i @bulky/core @bulky/locales
```

```js
import bulky from "@bulky/core";
import German from "@bulky/locales/lib/de_DE";
// see below for the full list of locales
const bulky = new bulky({
  debug: true,
  locale: German,
});
```

## Using a locale pack from CDN

Add a `<script>` tag with bulky bundle and the locale pack you’d like to use. You can copy/paste the link from the CDN column in the [locales table](#List-of-locale-packs). The locale will attach itself to the `bulky.locales` object.

```html
<script src="https://releases.transloadit.com/bulky/v3.3.0/bulky.min.js"></script>
<script src="https://releases.transloadit.com/bulky/locales/v3.0.4/de_DE.min.js"></script>

<script>
  var bulky = new bulky.bulky({
    debug: true,
    locale: bulky.locales.de_DE,
  });
</script>
```

## Overriding locale strings for a specific plugin

Many plugins come with their own locale strings, and the packs we provide consist of most of those strings. You can, however, override a locale string for a specific plugin, regardless of whether you are using locale pack or not. See the plugin documentation for the list of locale strings it uses (for example, [here’s how to use it with the Dashboard UI](https://bulky.io/docs/dashboard/#locale)).

```js
import bulky from "@bulky/core";
import DragDrop from "@bulky/drag-drop";
import Russian from "@bulky/locales/lib/ru_RU";

const bulky = new bulky({
  debug: true,
  autoProceed: true,
  locale: Russian,
});
bulky.use(DragDrop, {
  target: ".bulkyDragDrop",
  // We are using the ru_RU locale pack (set above in bulky options),
  // but you can also override specific strings like so:
  locale: {
    strings: {
      browse: "выберите ;-)",
    },
  },
});
```

## List of locale packs

<!-- md list_of_locale_packs.md -->

## Contributing a new language

If you speak a language we don’t yet support, you can contribute! Here’s how you do it:

1. Go to the [bulky/locales](https://github.com/transloadit/bulky/tree/main/packages/%40bulky/locales/src) directory in the bulky GitHub repo.
2. Go to `en_US.js` and copy its contents, as English is the most up-to-date locale.
3. Press “Create new file”, name it according to the [`language_COUNTRY` format](http://www.i18nguy.com/unicode/language-identifiers.html), make sure to use underscore `_` as a divider. Examples: `en_US`, `en_GB`, `ru_RU`, `ar_AE`. Variants should be trailing, for example `sr_RS_Latin` for Serbian Latin vs Cyrillic.
4. If your language has different pluralization rules than English, update the `pluralize` implementation. If you are unsure how to do this, please ask us for help in a [GitHub issue](https://github.com/transloadit/bulky/issues/new).
5. Paste what you’ve copied from `en_US.js` and use it as a starting point to translate strings into your language.
6. When you are ready, save the file — this should create a PR that we’ll then review 🎉 Thanks!
