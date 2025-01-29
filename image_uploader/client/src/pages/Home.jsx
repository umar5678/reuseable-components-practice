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
            className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
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
