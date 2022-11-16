import DashboardPlugin from "@bulky/dashboard";
import { shallowEqualObjects } from "shallow-equal";

// Cross compatibility dependencies
import * as Vue from "vue";
import { isVue2 } from "./utils.js";

export default {
  data() {
    return {
      plugin: {},
    };
  },
  props: {
    bulky: {
      required: true,
    },
    props: {
      type: Object,
    },
    plugins: {
      type: Array,
    },
  },
  mounted() {
    this.installPlugin();
  },
  methods: {
    installPlugin() {
      const { bulky } = this;
      const options = {
        id: "vue:Dashboard",
        inline: true,
        plugins: this.plugins,
        ...this.props,
        target: this.$refs.container,
      };
      bulky.use(DashboardPlugin, options);
      this.plugin = bulky.getPlugin(options.id);
    },
    uninstallPlugin(bulky) {
      bulky.removePlugin(this.plugin);
    },
  },
  beforeDestroy() {
    this.uninstallPlugin(this.bulky);
  },
  beforeUnmount() {
    this.uninstallPlugin(this.bulky);
  },
  watch: {
    bulky(current, old) {
      if (old !== current) {
        this.uninstallPlugin(old);
        this.installPlugin();
      }
    },
    props(current, old) {
      if (!shallowEqualObjects(current, old)) {
        this.plugin.setOptions({ ...current });
      }
    },
  },
  render(...args) {
    // Hack to allow support for Vue 2 and 3
    if (isVue2(...args)) {
      // If it's first argument is a function, then it's a Vue 2 App
      const [createElement] = args;
      return createElement("div", {
        ref: "container",
      });
    }

    // Otherwise, we use the `h` function from the Vue package (in Vue 3 fashion)
    return Vue.h("div", {
      ref: "container",
    });
  },
};
