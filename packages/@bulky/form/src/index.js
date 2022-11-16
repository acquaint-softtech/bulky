import BasePlugin from "@bulky/core/lib/BasePlugin.js";
import findDOMElement from "@bulky/utils/lib/findDOMElement";
import toArray from "@bulky/utils/lib/toArray";

import getFormData from "get-form-data";

import packageJson from "../package.json";

/**
 * Form
 */
export default class Form extends BasePlugin {
  static VERSION = packageJson.version;

  constructor(bulky, opts) {
    super(bulky, opts);
    this.type = "acquirer";
    this.id = this.opts.id || "Form";
    this.title = "Form";

    // set default options
    const defaultOptions = {
      target: null,
      resultName: "bulkyResult",
      getMetaFromForm: true,
      addResultToForm: true,
      submitOnSuccess: false,
      triggerUploadOnSubmit: false,
    };

    // merge default options with the ones set by user
    this.opts = { ...defaultOptions, ...opts };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUploadStart = this.handleUploadStart.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.addResultToForm = this.addResultToForm.bind(this);
    this.getMetaFromForm = this.getMetaFromForm.bind(this);
  }

  handleUploadStart() {
    if (this.opts.getMetaFromForm) {
      this.getMetaFromForm();
    }
  }

  handleSuccess(result) {
    if (this.opts.addResultToForm) {
      this.addResultToForm(result);
    }

    if (this.opts.submitOnSuccess) {
      this.form.submit();
    }
  }

  handleFormSubmit(ev) {
    if (this.opts.triggerUploadOnSubmit) {
      ev.preventDefault();
      const elements = toArray(ev.target.elements);
      const disabledBybulky = [];
      elements.forEach((el) => {
        const isButton =
          el.tagName === "BUTTON" ||
          (el.tagName === "INPUT" && el.type === "submit");
        if (isButton && !el.disabled) {
          el.disabled = true; // eslint-disable-line no-param-reassign
          disabledBybulky.push(el);
        }
      });
      this.bulky
        .upload()
        .then(
          () => {
            disabledBybulky.forEach((button) => {
              button.disabled = false; // eslint-disable-line no-param-reassign
            });
          },
          (err) => {
            disabledBybulky.forEach((button) => {
              button.disabled = false; // eslint-disable-line no-param-reassign
            });
            return Promise.reject(err);
          }
        )
        .catch((err) => {
          this.bulky.log(err.stack || err.message || err);
        });
    }
  }

  addResultToForm(result) {
    this.bulky.log("[Form] Adding result to the original form:");
    this.bulky.log(result);

    let resultInput = this.form.querySelector(
      `[name="${this.opts.resultName}"]`
    );
    if (resultInput) {
      // Append new result to the previous result array.
      // If the previous result is empty, or not an array,
      // set it to an empty array.
      let updatedResult;
      try {
        updatedResult = JSON.parse(resultInput.value);
      } catch (err) {
        // Nothing, since we check for array below anyway
      }

      if (!Array.isArray(updatedResult)) {
        updatedResult = [];
      }
      updatedResult.push(result);
      resultInput.value = JSON.stringify(updatedResult);
      return;
    }

    resultInput = document.createElement("input");
    resultInput.name = this.opts.resultName;
    resultInput.type = "hidden";
    resultInput.value = JSON.stringify([result]);

    this.form.appendChild(resultInput);
  }

  getMetaFromForm() {
    const formMeta = getFormData(this.form);
    // We want to exclude meta the the Form plugin itself has added
    // See https://github.com/transloadit/bulky/issues/1637
    delete formMeta[this.opts.resultName];
    this.bulky.setMeta(formMeta);
  }

  install() {
    this.form = findDOMElement(this.opts.target);
    if (!this.form || this.form.nodeName !== "FORM") {
      this.bulky.log(
        "Form plugin requires a <form> target element passed in options to operate, none was found",
        "error"
      );
      return;
    }

    this.form.addEventListener("submit", this.handleFormSubmit);
    this.bulky.on("upload", this.handleUploadStart);
    this.bulky.on("complete", this.handleSuccess);
  }

  uninstall() {
    this.form.removeEventListener("submit", this.handleFormSubmit);
    this.bulky.off("upload", this.handleUploadStart);
    this.bulky.off("complete", this.handleSuccess);
  }
}
