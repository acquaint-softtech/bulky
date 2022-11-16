import bulky from "@bulky/core";

import DragDrop from "..";

{
  const bulky = new bulky();

  bulky.use(DragDrop, {
    target: "body",
    inputName: "test",
    allowMultipleFiles: true,
    width: 100,
    height: "100",
    note: "note",
    locale: {
      strings: {
        dropHereOr: "test",
        browse: "test",
      },
    },
    onDragOver: (event) => event.clientX,
    onDragLeave: (event) => event.clientY,
    onDrop: (event) => event,
  });
}
