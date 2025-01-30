import React, { useState } from "react";
import Button from "../components/ui/Button";
import axios from "axios";

const url = import.meta.env.VITE_SERVER_URI;

// create a new state var for preview URl
// create a handle submit function, use this instaed e.target.file[0] from the input
// use try-catch in axios request, add headers for multipart/form-data, instead of form attribute
// improve image preview logic

const Home = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      console.log("no image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("uploaded Response", response.data);
      setImage(null);
    } catch (error) {
      console.error("Upload Error", error);
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewURL(null);
    }
  };

  return (
    <div className=" dark:text-gray-100">
      <h1 className="dark:text-gray-100">Home</h1>
      <div className="">
        <form className="max-w-sm" onSubmit={handleImageSubmit}>
          <label for="file-input" className="sr-only">
            Choose file
          </label>
          <input
           
            onChange={handleImageChange}
            type="file"
            name="file-input"
            id="file-input"
            className="uploader"
          />
          <Button className="mt-4" type="submit" variant="primary">
            Upload
          </Button>
        </form>
        {previewURL && ( // Conditionally render the preview
          <img
            src={previewURL}
            alt="Image Preview"
            className="mt-4 max-w-full"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
