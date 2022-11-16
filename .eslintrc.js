/* eslint-disable quote-props */

"use strict";

const svgPresentationAttributes = [
  "alignment-baseline",
  "baseline-shift",
  "class",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolatio",
  "color-interpolatio-filters",
  "color-profile",
  "color-rendering",
  "cursor",
  "direction",
  "display",
  "dominant-baseline",
  "enable-background",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "image-rendering",
  "kerning",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "mask",
  "opacity",
  "overflow",
  "pointer-events",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "transform",
  "transform-origin",
  "unicode-bidi",
  "vector-effect",
  "visibility",
  "word-spacing",
  "writing-mod",
];

module.exports = {
  root: true,
  extends: ["transloadit"],
  env: {
    es6: true,
    jest: true,
    node: true,
    // extra:
    browser: true,
  },
  globals: {
    globalThis: true,
    hexo: true,
    window: true,
  },
  plugins: [
    "@babel/eslint-plugin",
    "jest",
    "markdown",
    "node",
    "prefer-import",
    "promise",
    "react",
    // extra:
    "compat",
    "jsdoc",
    "unicorn",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "script",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // transloadit rules we are actually ok with in the bulky repo
    "import/extensions": "off",
    "object-shorthand": ["error", "always"],
    strict: "off",
    "key-spacing": "off",
    "max-classes-per-file": ["error", 2],
    "react/no-unknown-property": [
      "error",
      {
        ignore: svgPresentationAttributes,
      },
    ],

    // rules we want to enforce
    "array-callback-return": "error",
    "implicit-arrow-linebreak": "error",
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": "error",
    "max-len": "error",
    "no-empty": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-nested-ternary": "error",
    "no-restricted-properties": "error",
    "no-return-assign": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-useless-concat": "error",
    "no-var": "error",
    "node/handle-callback-err": "error",
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    "unicorn/prefer-node-protocol": "error",

    // transloadit rules we would like to enforce in the future
    // but will require separate PRs to gradually get there
    // and so the meantime: just warn
    "class-methods-use-this": ["warn"],
    "consistent-return": ["warn"],
    "default-case": ["warn"],
    "global-require": ["warn"],
    "import/no-unresolved": ["warn"],
    "import/order": ["warn"],
    "no-mixed-operators": ["warn"],
    "no-param-reassign": ["warn"],
    "no-redeclare": ["warn"],
    "no-shadow": ["warn"],
    "no-use-before-define": ["warn", { functions: false }],
    radix: ["warn"],
    "react/button-has-type": "error",
    "react/destructuring-assignment": ["warn"],
    "react/forbid-prop-types": "error",
    "react/jsx-props-no-spreading": ["warn"],
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-deprecated": "error",
    "react/no-this-in-sfc": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-stateless-function": "error",
    "react/sort-comp": "error",
    "react/style-prop-object": "error",

    // accessibility
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/control-has-associated-label": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "jsx-a11y/no-static-element-interactions": "error",

    // compat
    "compat/compat": ["error"],

    // jsdoc
    "jsdoc/check-alignment": "error",
    "jsdoc/check-examples": "off", // cannot yet be supported for ESLint 8, see https://github.com/eslint/eslint/issues/14745
    "jsdoc/check-param-names": ["warn"],
    "jsdoc/check-syntax": ["warn"],
    "jsdoc/check-tag-names": ["error", { jsxTags: true }],
    "jsdoc/check-types": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/valid-types": "error",
    "jsdoc/check-indentation": ["off"],
  },

  settings: {
    "import/core-modules": ["tsd"],
    react: {
      pragma: "h",
    },
    jsdoc: {
      mode: "typescript",
    },
    polyfills: ["Promise", "fetch", "Object.assign", "document.querySelector"],
  },

  overrides: [
    {
      files: ["*.jsx", "packages/@bulky/react-native/**/*.js"],
      parser: "espree",
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "no-restricted-globals": [
          "error",
          {
            name: "__filename",
            message: "Use import.meta.url instead",
          },
          {
            name: "__dirname",
            message: "Not available in ESM",
          },
          {
            name: "exports",
            message: "Not available in ESM",
          },
          {
            name: "module",
            message: "Not available in ESM",
          },
          {
            name: "require",
            message: "Use import instead",
          },
        ],
        "import/extensions": ["error", "ignorePackages"],
      },
    },
    {
      files: [
        "*.mjs",
        "e2e/clients/**/*.js",
        "examples/aws-companion/*.js",
        "examples/aws-php/*.js",
        "examples/bundled/*.js",
        "examples/custom-provider/client/*.js",
        "examples/digitalocean-spaces/*.js",
        "examples/multiple-instances/*.js",
        "examples/node-xhr/*.js",
        "examples/php-xhr/*.js",
        "examples/python-xhr/*.js",
        "examples/react-example/*.js",
        "examples/transloadit/*.js",
        "examples/transloadit-markdown-bin/*.js",
        "examples/xhr-bundle/*.js",
        "private/dev/*.js",
        "private/release/*.js",
        "private/remark-lint-bulky/*.js",

        // Packages that have switched to ESM sources:
        "packages/@bulky/audio/src/**/*.js",
        "packages/@bulky/aws-s3-multipart/src/**/*.js",
        "packages/@bulky/aws-s3/src/**/*.js",
        "packages/@bulky/box/src/**/*.js",
        "packages/@bulky/companion-client/src/**/*.js",
        "packages/@bulky/compressor/src/**/*.js",
        "packages/@bulky/core/src/**/*.js",
        "packages/@bulky/dashboard/src/**/*.js",
        "packages/@bulky/drag-drop/src/**/*.js",
        "packages/@bulky/drop-target/src/**/*.js",
        "packages/@bulky/dropbox/src/**/*.js",
        "packages/@bulky/facebook/src/**/*.js",
        "packages/@bulky/file-input/src/**/*.js",
        "packages/@bulky/form/src/**/*.js",
        "packages/@bulky/golden-retriever/src/**/*.js",
        "packages/@bulky/google-drive/src/**/*.js",
        "packages/@bulky/image-editor/src/**/*.js",
        "packages/@bulky/informer/src/**/*.js",
        "packages/@bulky/instagram/src/**/*.js",
        "packages/@bulky/locales/src/**/*.js",
        "packages/@bulky/locales/template.js",
        "packages/@bulky/onedrive/src/**/*.js",
        "packages/@bulky/progress-bar/src/**/*.js",
        "packages/@bulky/provider-views/src/**/*.js",
        "packages/@bulky/react/src/**/*.js",
        "packages/@bulky/redux-dev-tools/src/**/*.js",
        "packages/@bulky/remote-sources/src/**/*.js",
        "packages/@bulky/screen-capture/src/**/*.js",
        "packages/@bulky/status-bar/src/**/*.js",
        "packages/@bulky/store-default/src/**/*.js",
        "packages/@bulky/store-redux/src/**/*.js",
        "packages/@bulky/svelte/rollup.config.js",
        "packages/@bulky/svelte/src/**/*.js",
        "packages/@bulky/thumbnail-generator/src/**/*.js",
        "packages/@bulky/transloadit/src/**/*.js",
        "packages/@bulky/tus/src/**/*.js",
        "packages/@bulky/unsplash/src/**/*.js",
        "packages/@bulky/url/src/**/*.js",
        "packages/@bulky/utils/src/**/*.js",
        "packages/@bulky/vue/src/**/*.js",
        "packages/@bulky/webcam/src/**/*.js",
        "packages/@bulky/xhr-upload/src/**/*.js",
        "packages/@bulky/zoom/src/**/*.js",
        "website/src/examples/*/*.es6",
      ],
      parser: "espree",
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: false,
        },
      },
      rules: {
        "import/named": "off", // Disabled because that rule tries and fails to parse JSX dependencies.
        "import/no-named-as-default": "off", // Disabled because that rule tries and fails to parse JSX dependencies.
        "import/no-named-as-default-member": "off", // Disabled because that rule tries and fails to parse JSX dependencies.
        "no-restricted-globals": [
          "error",
          {
            name: "__filename",
            message: "Use import.meta.url instead",
          },
          {
            name: "__dirname",
            message: "Not available in ESM",
          },
          {
            name: "exports",
            message: "Not available in ESM",
          },
          {
            name: "module",
            message: "Not available in ESM",
          },
          {
            name: "require",
            message: "Use import instead",
          },
        ],
        "import/extensions": ["error", "ignorePackages"],
      },
    },
    {
      files: ["packages/bulky/*.mjs"],
      rules: {
        "import/first": "off",
        "import/newline-after-import": "off",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ["packages/@bulky/*/types/*.d.ts"],
      rules: {
        "import/no-unresolved": "off",
        "max-classes-per-file": "off",
        "no-use-before-define": "off",
      },
    },
    {
      files: ["packages/@bulky/dashboard/src/components/**/*.jsx"],
      rules: {
        "react/destructuring-assignment": "off",
      },
    },
    {
      files: [
        // Those need looser rules, and cannot be made part of the stricter rules above.
        // TODO: update those to more modern code when switch to ESM is complete
        "examples/react-native-expo/*.js",
        "examples/svelte-example/**/*.js",
        "examples/vue/**/*.js",
        "examples/vue3/**/*.js",
      ],
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      files: ["./packages/@bulky/companion/**/*.js"],
      rules: {
        "no-underscore-dangle": "off",

        // transloadit rules we would like to enforce in the future
        // but will require separate PRs to gradually get there
        // and so the meantime: just warn
        "class-methods-use-this": "warn",
        "consistent-return": "warn",
        "global-require": "warn",
        "import/order": "warn",
        "no-param-reassign": "warn",
        "no-redeclare": "warn",
        "no-shadow": "warn",
        "no-use-before-define": "warn",
      },
    },
    {
      files: ["website/src/examples/*/*.es6"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-console": "off",
      },
    },
    {
      files: ["*.test.js", "test/endtoend/*.js", "website/*.js", "bin/**.js"],
      rules: {
        "compat/compat": ["off"],
      },
    },
    {
      files: [
        "bin/**.js",
        "bin/**.mjs",
        "examples/**/*.config.js",
        "examples/**/*.cjs",
        "packages/@bulky/companion/test/**/*.js",
        "test/**/*.js",
        "test/**/*.ts",
        "*.test.js",
        "*.test-d.ts",
        "postcss.config.js",
        ".eslintrc.js",
        "website/*.js",
        "website/**/*.js",
        "private/**/*.js",
      ],
      rules: {
        "no-console": "off",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
      },
    },

    {
      files: [
        "packages/@bulky/locales/src/*.js",
        "packages/@bulky/locales/template.js",
      ],
      rules: {
        camelcase: ["off"],
        "quote-props": ["error", "as-needed", { numbers: true }],
      },
    },

    {
      files: ["website/themes/bulky/source/js/*.js"],
      rules: {
        "prefer-const": ["off"],
      },
    },

    {
      files: ["test/endtoend/*/*.mjs", "test/endtoend/*/*.ts"],
      rules: {
        // we mostly import @bulky stuff in these files.
        "import/no-extraneous-dependencies": ["off"],
      },
    },
    {
      files: ["test/endtoend/*/*.js"],
      env: {
        mocha: true,
      },
    },

    {
      files: ["packages/@bulky/react/src/**/*.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            peerDependencies: true,
          },
        ],
      },
    },

    {
      files: ["**/*.md", "*.md"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/*.js", "**/*.md/*.javascript"],
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        "react/destructuring-assignment": "off",
        "no-restricted-globals": [
          "error",
          {
            name: "__filename",
            message: "Use import.meta.url instead",
          },
          {
            name: "__dirname",
            message: "Not available in ESM",
          },
          {
            name: "exports",
            message: "Not available in ESM",
          },
          {
            name: "module",
            message: "Not available in ESM",
          },
          {
            name: "require",
            message: "Use import instead",
          },
        ],
      },
    },
    {
      files: ["**/*.ts", "**/*.md/*.ts", "**/*.md/*.typescript"],
      excludedFiles: [
        "examples/angular-example/**/*.ts",
        "packages/@bulky/angular/**/*.ts",
      ],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
      },
    },
    {
      files: ["**/*.md/*.*"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "no-console": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
      },
    },
    {
      files: ["**/react/*.md/*.js", "**/react.md/*.js", "**/react-*.md/*.js"],
      settings: {
        react: { pragma: "React" },
      },
    },
    {
      files: ["e2e/**/*.ts"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["e2e/**/*.ts", "e2e/**/*.js", "e2e/**/*.jsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-unused-expressions": "off",
      },
    },
  ],
};
