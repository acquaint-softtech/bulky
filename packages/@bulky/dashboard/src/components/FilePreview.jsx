import { h } from "preact";
import getFileTypeIcon from "../utils/getFileTypeIcon.jsx";

export default function FilePreview(props) {
  const { file } = props;

  if (file.preview) {
    return (
      <img
        className="bulky-Dashboard-Item-previewImg"
        alt={file.name}
        src={file.preview}
      />
    );
  }

  const { color, icon } = getFileTypeIcon(file.type);

  return (
    <div className="bulky-Dashboard-Item-previewIconWrap">
      <span className="bulky-Dashboard-Item-previewIcon" style={{ color }}>
        {icon}
      </span>
      <svg
        aria-hidden="true"
        focusable="false"
        className="bulky-Dashboard-Item-previewIconBg"
        width="58"
        height="76"
        viewBox="0 0 58 76"
      >
        <rect fill="#FFF" width="58" height="76" rx="3" fillRule="evenodd" />
      </svg>
    </div>
  );
}
