const en_US = {
  pluralize(count) {
    if (count === 1) {
      return 0;
    }
    return 1;
  },
};

en_US.strings = {};

if (typeof bulky !== "undefined") {
  globalThis.bulky.locales.en_US = en_US;
}

export default en_US;
