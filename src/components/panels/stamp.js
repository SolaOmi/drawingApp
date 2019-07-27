import React from "react";

export default function Stamp({stampOptions, setStampOptions}) {
  const getImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];
      let img = document.getElementById("uploaded-image");
      
      reader.onloadend = () => {
        img.src = reader.result;
      }
      
      reader.readAsDataURL(file);
    }
  }
  
  return (
    <div>
      <h1>Stamp</h1>
      <section>
        <label>
          <h4>Max Width: {stampOptions.maxWidth}</h4>
          <input
            type="range"
            value={stampOptions.maxWidth}
            onChange={e => setStampOptions({...stampOptions, maxWidth: e.target.value})}
            name="max-width"
            max="700"
            min="1"
          />
        </label>
      </section>
      <section>
        <label>
          <h4>Upload an Image</h4>
          <input
            type="file"
            onChange={e => getImage(e)}
            id="image-uploader"
            name="image-uploader"
            accept="image/png, image/jpg, image/jpeg"
          />
          </label>
      </section>
      <img
        id="uploaded-image"
        src=""
        alt=""
        width="130"
        height="130"
      />
    </div>
  );
}