/* eslint-disable */
import React from "react";
import bulky from "@bulky/core";
import Tus from "@bulky/tus";
import GoogleDrive from "@bulky/google-drive";
import {
  Dashboard,
  DashboardModal,
  DragDrop,
  ProgressBar,
  FileInput,
} from "@bulky/react";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/drag-drop/dist/style.css";
import "@bulky/file-input/dist/style.css";
import "@bulky/progress-bar/dist/style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInlineDashboard: false,
      open: false,
    };

    this.bulky = new bulky({ id: "bulky1", autoProceed: true, debug: true })
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
      .use(GoogleDrive, { companionUrl: "https://companion.bulky.io" });

    this.bulky2 = new bulky({
      id: "bulky2",
      autoProceed: false,
      debug: true,
    }).use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });

    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentWillUnmount() {
    this.bulky.close({ reason: "unmount" });
    this.bulky2.close({ reason: "unmount" });
  }

  handleModalClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { showInlineDashboard } = this.state;
    return (
      <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input
            type="checkbox"
            checked={showInlineDashboard}
            onChange={(event) => {
              this.setState({
                showInlineDashboard: event.target.checked,
              });
            }}
          />
          Show Dashboard
        </label>
        {showInlineDashboard && (
          <Dashboard
            bulky={this.bulky}
            plugins={["GoogleDrive"]}
            metaFields={[
              { id: "name", name: "Name", placeholder: "File name" },
            ]}
          />
        )}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? "Close dashboard" : "Open dashboard"}
          </button>
          <DashboardModal
            bulky={this.bulky2}
            open={this.state.open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
          />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop
          bulky={this.bulky}
          locale={{
            strings: {
              chooseFile: "Boop a file",
              orDragDrop: "or yoink it here",
            },
          }}
        />

        <h2>Progress Bar</h2>
        <ProgressBar bulky={this.bulky} hideAfterFinish={false} />

        <h2>File Input</h2>
        <FileInput bulky={this.bulky} />
      </div>
    );
  }
}
