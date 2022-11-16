import { createElement as h, Component } from "react";
import PropTypes from "prop-types";
import { bulky as bulkyPropType } from "./propTypes.js";

class bulkyWrapper extends Component {
  constructor(props) {
    super(props);

    this.refContainer = this.refContainer.bind(this);
  }

  componentDidMount() {
    this.installPlugin();
  }

  componentDidUpdate(prevProps) {
    const { bulky } = this.props;
    if (prevProps.bulky !== bulky) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
  }

  componentWillUnmount() {
    this.uninstallPlugin();
  }

  installPlugin() {
    const { plugin, bulky } = this.props;
    const pluginObj = bulky.getPlugin(plugin);

    pluginObj.mount(this.container, pluginObj);
  }

  uninstallPlugin({ bulky } = this.props) {
    const { plugin } = this.props;
    bulky.getPlugin(plugin).unmount();
  }

  refContainer(container) {
    this.container = container;
  }

  render() {
    return h("div", { className: "bulky-Container", ref: this.refContainer });
  }
}

bulkyWrapper.propTypes = {
  bulky: bulkyPropType.isRequired,
  plugin: PropTypes.string.isRequired,
};

export default bulkyWrapper;
