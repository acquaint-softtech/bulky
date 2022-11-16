import bulky from "@bulky/core";
import DropTarget from "..";

{
  const bulky = new bulky();

  bulky.use(DropTarget, {
    target: "body",
    onDragOver: (event) => event.clientX,
    onDrop: (event) => event.clientX,
    onDragLeave: (event) => event.clientX,
  });
}
