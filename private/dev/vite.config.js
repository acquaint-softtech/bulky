import { fileURLToPath } from "node:url";
import autoprefixer from "autoprefixer";
import postcssLogical from "postcss-logical";
import postcssDirPseudoClass from "postcss-dir-pseudo-class";

const ROOT = new URL("../../", import.meta.url);
const PACKAGES_ROOT = fileURLToPath(new URL("./packages/", ROOT));

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  envDir: fileURLToPath(ROOT),
  css: {
    postcss: {
      plugins: [autoprefixer, postcssLogical(), postcssDirPseudoClass()],
    },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  resolve: {
    alias: [
      {
        find: /^bulky\/(.+)$/,
        replacement: `${PACKAGES_ROOT}bulky/$1`,
      },
      {
        find: /^@bulky\/([^/]+)$/,
        replacement: `${PACKAGES_ROOT}@bulky/$1/src/index.js`,
      },
      {
        find: /^@bulky\/([^/]+)\/lib\/(.+)$/,
        replacement: `${PACKAGES_ROOT}@bulky/$1/src/$2`,
      },
      //   {
      //     find: /^@bulky\/([^/]+)\/(.+)$/,
      //     replacement: PACKAGES_ROOT + "@bulky/$1/src/$2",
      //   },
    ],
  },
};

export default config;
