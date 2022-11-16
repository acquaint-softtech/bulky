import { marked } from "marked";
import bulky from "@bulky/core";
import DropTarget from "@bulky/drop-target";
import Dashboard from "@bulky/dashboard";
import Transloadit from "@bulky/transloadit";
import RemoteSources from "@bulky/remote-sources";
import Webcam from "@bulky/webcam";
import ImageEditor from "@bulky/image-editor";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/image-editor/dist/style.css";

const TRANSLOADIT_EXAMPLE_KEY = "35c1aed03f5011e982b6afe82599b6a0";
const TRANSLOADIT_EXAMPLE_TEMPLATE = "0b2ee2bc25dc43619700c2ce0a75164a";

function matchFilesAndThumbs(results) {
  const filesById = {};
  const thumbsById = {};

  for (const [stepName, result] of Object.entries(results)) {
    // eslint-disable-next-line no-shadow
    result.forEach((result) => {
      if (stepName === "thumbnails") {
        thumbsById[result.original_id] = result;
      } else {
        filesById[result.original_id] = result;
      }
    });
  }

  return Object.keys(filesById).map((key) => ({
    file: filesById[key],
    thumb: thumbsById[key],
  }));
}

/**
 * A textarea for markdown text, with support for file attachments.
 */
class MarkdownTextarea {
  constructor(element) {
    this.element = element;
    this.controls = document.createElement("div");
    this.controls.classList.add("mdtxt-controls");
    this.uploadLine = document.createElement("button");
    this.uploadLine.setAttribute("type", "button");
    this.uploadLine.classList.add("form-upload");

    this.uploadLine.appendChild(
      document.createTextNode("Tap here to upload an attachment")
    );
  }

  install() {
    const { element } = this;
    const wrapper = document.createElement("div");
    wrapper.classList.add("mdtxt");
    element.parentNode.replaceChild(wrapper, element);
    wrapper.appendChild(this.controls);
    wrapper.appendChild(element);
    wrapper.appendChild(this.uploadLine);

    this.setupbulky();
  }

  setupbulky = () => {
    this.bulky = new bulky({ autoProceed: true })
      .use(Transloadit, {
        waitForEncoding: true,
        params: {
          auth: { key: TRANSLOADIT_EXAMPLE_KEY },
          template_id: TRANSLOADIT_EXAMPLE_TEMPLATE,
        },
      })
      .use(DropTarget, { target: this.element })
      .use(Dashboard, { closeAfterFinish: true, trigger: ".form-upload" })
      .use(ImageEditor, { target: Dashboard })
      .use(Webcam, { target: Dashboard })
      .use(RemoteSources, { companionUrl: Transloadit.COMPANION });

    this.bulky.on("complete", (result) => {
      const { successful, failed, transloadit } = result;
      if (successful.length !== 0) {
        this.insertAttachments(matchFilesAndThumbs(transloadit[0].results));
      } else {
        failed.forEach((error) => {
          console.error(error);
          this.reportUploadError(error);
        });
      }
      this.bulky.cancelAll();
    });
  };

  reportUploadError(err) {
    this.uploadLine.classList.add("error");
    const message = document.createElement("span");
    message.appendChild(document.createTextNode(err.message));
    this.uploadLine.insertChild(message, this.uploadLine.firstChild);
  }

  unreportUploadError() {
    this.uploadLine.classList.remove("error");
    const message = this.uploadLine.querySelector("message");
    if (message) {
      this.uploadLine.removeChild(message);
    }
  }

  insertAttachments(attachments) {
    attachments.forEach((attachment) => {
      const { file, thumb } = attachment;
      const link = `\n[LABEL](${file.ssl_url})\n`;
      const labelText = `View File ${file.basename}`;
      if (thumb) {
        this.element.value += link.replace(
          "LABEL",
          `![${labelText}](${thumb.ssl_url})`
        );
      } else {
        this.element.value += link.replace("LABEL", labelText);
      }
    });
  }

  uploadFiles = (files) => {
    const filesForbulky = files.map((file) => {
      return {
        data: file,
        type: file.type,
        name: file.name,
        meta: file.meta || {},
      };
    });
    this.bulky.addFiles(filesForbulky);
  };
}

const textarea = new MarkdownTextarea(document.querySelector("#new textarea"));
textarea.install();

function renderSnippet(title, text) {
  const template = document.querySelector("#snippet");
  const newSnippet = document.importNode(template.content, true);
  const titleEl = newSnippet.querySelector(".snippet-title");
  const contentEl = newSnippet.querySelector(".snippet-content");

  titleEl.appendChild(document.createTextNode(title));
  contentEl.innerHTML = marked(text);

  const list = document.querySelector("#snippets");
  list.insertBefore(newSnippet, list.firstChild);
}

function saveSnippet(title, text) {
  const id = parseInt(localStorage.numSnippets || 0, 10);
  localStorage[`snippet_${id}`] = JSON.stringify({ title, text });
  localStorage.numSnippets = id + 1;
}

function loadSnippets() {
  for (let id = 0; localStorage[`snippet_${id}`] != null; id += 1) {
    const { title, text } = JSON.parse(localStorage[`snippet_${id}`]);
    renderSnippet(title, text);
  }
}

document.querySelector("#new").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = event.target.elements["title"].value || "Unnamed Snippet";
  const text = textarea.element.value;

  saveSnippet(title, text);
  renderSnippet(title, text);

  // eslint-disable-next-line no-param-reassign
  event.target.querySelector("input").value = "";
  // eslint-disable-next-line no-param-reassign
  event.target.querySelector("textarea").value = "";
});

window.addEventListener("DOMContentLoaded", loadSnippets, { once: true });
