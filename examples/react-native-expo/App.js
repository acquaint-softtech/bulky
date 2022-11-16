// import * as Expo from 'expo'
import React from "react";
import { Text, View, AsyncStorage, Image } from "react-native";
import bulky from "@bulky/core";
import Tus from "@bulky/tus";
import bulkyFilePicker from "@bulky/react-native";
import FileList from "./FileList";
import PauseResumeButton from "./PauseResumeButton";
import ProgressBar from "./ProgressBar";
import SelectFiles from "./SelectFilesButton";
import getTusFileReader from "./tusFileReader";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
      total: 0,
      file: null,
      uploadURL: null,
      isFilePickerVisible: false,
      isPaused: false,
      uploadStarted: false,
      uploadComplete: false,
      info: null,
      totalProgress: 0,
    };

    this.isReactNative =
      typeof navigator !== "undefined" &&
      typeof navigator.product === "string" &&
      navigator.product.toLowerCase() === "reactnative";

    this.showFilePicker = this.showFilePicker.bind(this);
    this.hideFilePicker = this.hideFilePicker.bind(this);
    this.togglePauseResume = this.togglePauseResume.bind(this);

    console.log("Is this React Native?", this.isReactNative);
    this.bulky = new bulky({ autoProceed: true, debug: true });
    this.bulky.use(Tus, {
      endpoint: "https://tusd.tusdemo.net/files/",
      urlStorage: AsyncStorage,
      fileReader: getTusFileReader,
      chunkSize: 10 * 1024 * 1024, // keep the chunk size small to avoid memory exhaustion
    });
    this.bulky.on("upload-progress", (file, progress) => {
      this.setState({
        progress: progress.bytesUploaded,
        total: progress.bytesTotal,
        totalProgress: this.bulky.state.totalProgress,
        uploadStarted: true,
      });
    });
    this.bulky.on("upload-success", () => {
      // console.log(file.name, response)
    });
    this.bulky.on("complete", (result) => {
      this.setState({
        status: "Upload complete ✅",
        uploadURL: result.successful[0] ? result.successful[0].uploadURL : null,
        uploadComplete: true,
        uploadStarted: false,
      });
      console.log("Upload complete:", result);
    });

    this.bulky.on("info-visible", () => {
      const { info } = this.bulky.getState();
      this.setState({
        info,
      });
      console.log("bulky-info:", info);
    });

    this.bulky.on("info-hidden", () => {
      this.setState({
        info: null,
      });
    });
  }

  showFilePicker() {
    this.setState({
      isFilePickerVisible: true,
      uploadStarted: false,
      uploadComplete: false,
    });
  }

  hideFilePicker() {
    this.setState({
      isFilePickerVisible: false,
    });
  }

  togglePauseResume() {
    if (this.state.isPaused) {
      this.bulky.resumeAll();
      this.setState({
        isPaused: false,
      });
    } else {
      this.bulky.pauseAll();
      this.setState({
        isPaused: true,
      });
    }
  }

  render() {
    return (
      <View
        style={{
          paddingTop: 100,
          paddingLeft: 50,
          paddingRight: 50,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          bulky in React Native
        </Text>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 80, height: 78, marginBottom: 50 }}
            source={require("./assets/bulky-logo.png")}
          />
        </View>
        <SelectFiles showFilePicker={this.showFilePicker} />

        {this.state.info ? (
          <Text
            style={{
              marginBottom: 10,
              marginTop: 10,
              color: "#b8006b",
            }}
          >
            {this.state.info.message}
          </Text>
        ) : null}

        <ProgressBar progress={this.state.totalProgress} />

        <PauseResumeButton
          isPaused={this.state.isPaused}
          onPress={this.togglePauseResume}
          uploadStarted={this.state.uploadStarted}
          uploadComplete={this.state.uploadComplete}
        />

        <bulkyFilePicker
          bulky={this.bulky}
          show={this.state.isFilePickerVisible}
          onRequestClose={this.hideFilePicker}
          companionUrl="http://localhost:3020"
        />

        <FileList bulky={this.bulky} />

        {/* <Text>{this.state.status ? 'Status: ' + this.state.status : null}</Text>
        <Text>{this.state.progress} of {this.state.total}</Text> */}
      </View>
    );
  }
}
