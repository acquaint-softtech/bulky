/* eslint-disable react/react-in-jsx-scope */
import bulky from "@bulky/core";
/* eslint-disable-next-line no-unused-vars */
import React, { useState } from "react";
import { Dashboard, DashboardModal, DragDrop } from "@bulky/react";
import ThumbnailGenerator from "@bulky/thumbnail-generator";

import "@bulky/core/dist/style.css";
import "@bulky/dashboard/dist/style.css";
import "@bulky/drag-drop/dist/style.css";

export default function App() {
  const bulkyDashboard = new bulky({ id: "dashboard" });
  const bulkyModal = new bulky({ id: "modal" });
  const bulkyDragDrop = new bulky({ id: "drag-drop" }).use(ThumbnailGenerator);
  const [open, setOpen] = useState(false);

  // drag-drop has no visual output so we test it via the bulky instance
  window.bulky = bulkyDragDrop;

  return (
    <div
      style={{
        maxWidth: "30em",
        margin: "5em 0",
        display: "grid",
        gridGap: "2em",
      }}
    >
      <button type="button" id="open" onClick={() => setOpen(!open)}>
        Open Modal
      </button>

      <Dashboard id="dashboard" bulky={bulkyDashboard} />
      <DashboardModal id="modal" open={open} bulky={bulkyModal} />
      <DragDrop id="drag-drop" bulky={bulkyDragDrop} />
    </div>
  );
}
