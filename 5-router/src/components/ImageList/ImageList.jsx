import React from "react";
import { Link } from "react-router-dom";
import "./ImageList.scss";

function ImageList({ arrImages }) {
  return (
    <>
      <div>
        {arrImages.map((image) => (
          <div key={image.id} className="image-item-container">
            <Link to={`/image/${image.id}`}>
              <img src={image.url} alt={image.title} className="image" />
            </Link>
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageList;
