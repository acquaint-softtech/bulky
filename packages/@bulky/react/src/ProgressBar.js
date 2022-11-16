import { createElement as h, Component } from "react";
import PropTypes from "prop-types";
import ProgressBarPlugin from "@bulky/progress-bar";
import { bulky as bulkyPropType } from "./propTypes.js";
import getHTMLProps from "./getHTMLProps.js";
import nonHtmlPropsHaveChanged from "./nonHtmlPropsHaveChanged.js";

/**
 * React component that renders a progress bar at the top of the page.
 */

class ProgressBar extends Component {
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
    const { bulky, fixed, hideAfterFinish } = this.props;
    const options = {
      id: "react:ProgressBar",
      fixed,
      hideAfterFinish,
      target: this.container,
    };
    delete options.bulky;

    bulky.use(ProgressBarPlugin, options);

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

ProgressBar.propTypes = {
  bulky: bulkyPropType.isRequired,
  fixed: PropTypes.bool,
  hideAfterFinish: PropTypes.bool,
};
// Must be kept in sync with @bulky/progress-bar/src/ProgressBar.jsx
ProgressBar.defaultProps = {
  fixed: false,
  hideAfterFinish: true,
};

export default ProgressBar;
