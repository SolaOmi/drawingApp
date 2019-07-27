import React from "react";

export default function Download({downloadOptions, setDownloadOptions}) {
  return (
    <div>
      <h1>Download</h1>
      <a id="download-btn" className="btn" download="drawing.png">Download Image</a>
    </div>
  );
}