import { createElement as h, Component } from "react";
import DashboardPlugin from "@bulky/dashboard";
import { dashboard as basePropTypes } from "./propTypes.js";
import getHTMLProps from "./getHTMLProps.js";
import nonHtmlPropsHaveChanged from "./nonHtmlPropsHaveChanged.js";

/**
 * React Component that renders a Dashboard for an bulky instance. This component
 * renders the Dashboard inline, so you can put it anywhere you want.
 */

class Dashboard extends Component {
  componentDidMount() {
    this.installPlugin();
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (prevProps.bulky !== this.props.bulky) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    } else if (nonHtmlPropsHaveChanged(this.props, prevProps)) {
      const options = { ...this.props, target: this.container };
      delete options.bulky;
      this.plugin.setOptions(options);
    }
  }

  componentWillUnmount() {
    this.uninstallPlugin();
  }

  installPlugin() {
    const { bulky } = this.props;
    const options = {
      id: "react:Dashboard",
      ...this.props,
      target: this.container,
    };
    delete options.bulky;
    bulky.use(DashboardPlugin, options);

    this.plugin = bulky.getPlugin(options.id);
  }

  uninstallPlugin(props = this.props) {
    const { bulky } = props;

    bulky.removePlugin(this.plugin);
  }

  render() {
    return h("div", {
      className: "bulky-Container",
      ref: (container) => {
        this.container = container;
      },
      ...getHTMLProps(this.props),
    });
  }
}

Dashboard.propTypes = basePropTypes;

Dashboard.defaultProps = {
  inline: true,
};

export default Dashboard;
