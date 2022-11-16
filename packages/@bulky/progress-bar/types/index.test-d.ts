import bulky from "@bulky/core";
import ProgressBar from "..";

{
  const bulky = new bulky();
  bulky.use(ProgressBar, {
    target: "body",
    hideAfterFinish: true,
    fixed: true,
  });
}
