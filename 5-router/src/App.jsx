import "./App.scss";
import { useState } from "react";
import ImageList from "./components/ImageList/ImageList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import imagesData from "./data/images.json";
import Image from "./components/Image/Image";

function App() {
  const [arrImages, setArrImages] = useState(imagesData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageList arrImages={arrImages} />} />
          <Route
            path="/image/:imageId"
            element={<Image arrImages={arrImages} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
