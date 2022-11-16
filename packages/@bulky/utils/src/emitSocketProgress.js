import throttle from "lodash.throttle";

function emitSocketProgress(uploader, progressData, file) {
  const { progress, bytesUploaded, bytesTotal } = progressData;
  if (progress) {
    uploader.bulky.log(`Upload progress: ${progress}`);
    uploader.bulky.emit("upload-progress", file, {
      uploader,
      bytesUploaded,
      bytesTotal,
    });
  }
}

export default throttle(emitSocketProgress, 300, {
  leading: true,
  trailing: true,
});
