import React from "react";

const ImageGallery = (props) => {
  console.log("galerija", props);
  return (
    <div>
      {" "}
      <img
        width={400}
        height={300}
        src={`data:image/jpeg;base64,${props.images[0].imageData}`}
      />
      <br />
      {props.images.slice(0, 4).map((item) => {
        return (
          <img
            width={100}
            height={100}
            onClick={() => console.log("test", item)}
            src={`data:image/jpeg;base64,${item.imageData}`}
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;
