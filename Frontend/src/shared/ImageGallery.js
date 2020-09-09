import React from "react";
import back from "./icons/back.png";
import next from "./icons/next.png";

const ImageGallery = (props) => {
  return (
    <div>
      {" "}
      <img
        width={400}
        height={300}
        src={`data:image/jpeg;base64,${props.displayImage.image.imageData}`}
      />
      <br />
      {props.images.map((item) => {
        return (
          <img
            width={75}
            height={75}
            src={`data:image/jpeg;base64,${item.imageData}`}
          />
        );
      })}
      <br />
      {props.displayBack ? (
        <img
          height="100px"
          width="100px"
          src={back}
          alt="image"
          onClick={() => {
            props.controlImage(-1);
          }}
        />
      ) : null}
      {props.displayNext ? (
        <img
          height="100px"
          width="100px"
          src={next}
          alt="image"
          onClick={() => {
            props.controlImage(+1);
          }}
        />
      ) : null}
    </div>
  );
};

export default ImageGallery;
