import { createElement as h, Component } from "react";
import PropTypes from "prop-types";
import StatusBarPlugin from "@bulky/status-bar";
import { bulky as bulkyPropType } from "./propTypes.js";
import getHTMLProps from "./getHTMLProps.js";
import nonHtmlPropsHaveChanged from "./nonHtmlPropsHaveChanged.js";

/**
 * React component that renders a status bar containing upload progress and speed,
 * processing progress and pause/resume/cancel controls.
 */

class StatusBar extends Component {
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
    const {
      bulky,
      hideUploadButton,
      hideRetryButton,
      hidePauseResumeButton,
      hideCancelButton,
      showProgressDetails,
      hideAfterFinish,
      doneButtonHandler,
    } = this.props;
    const options = {
      id: "react:StatusBar",
      hideUploadButton,
      hideRetryButton,
      hidePauseResumeButton,
      hideCancelButton,
      showProgressDetails,
      hideAfterFinish,
      doneButtonHandler,
      target: this.container,
    };
    delete options.bulky;

    bulky.use(StatusBarPlugin, options);

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

StatusBar.propTypes = {
  bulky: bulkyPropType.isRequired,
  hideUploadButton: PropTypes.bool,
  hideRetryButton: PropTypes.bool,
  hidePauseResumeButton: PropTypes.bool,
  hideCancelButton: PropTypes.bool,
  showProgressDetails: PropTypes.bool,
  hideAfterFinish: PropTypes.bool,
  doneButtonHandler: PropTypes.func,
};
// Must be kept in sync with @bulky/status-bar/src/StatusBar.jsx.
StatusBar.defaultProps = {
  hideUploadButton: false,
  hideRetryButton: false,
  hidePauseResumeButton: false,
  hideCancelButton: false,
  showProgressDetails: false,
  hideAfterFinish: true,
  doneButtonHandler: null,
};

export default StatusBar;
