import React from "react";
import "./Image.scss";
import { useParams } from "react-router-dom";

function Image({ arrImages }) {
  const { imageId } = useParams();
  const image = arrImages.find((image) => image.id === imageId);

  console.log(`id param is: ${image.id}`);
  return (
    <div>
      {image ? (
        <>
          <img src={image.url} alt={image.title} className="image" />
          <h2>{image.title}</h2>
        </>
      ) : (
        <p>Image not found!</p>
      )}
    </div>
  );
}

export default Image;
