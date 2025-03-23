import React, { useState } from "react";
import Button from "../components/ui/Button";
import axios from "axios";

const url = import.meta.env.VITE_SERVER_URI;

const Home = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [error, setError] = useState(null); // State for error messages

  const handleImageChange = (e) => {
    setError(null); // Clear any previous errors

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileSizeKBs = selectedFile.size / 1024;
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"]; // Example types

      if (fileSizeKBs > 100) {
        setError("Image size exceeds 100KB limit.");
        return; // Stop further processing
      }

      if (!allowedTypes.includes(selectedFile.type)) {
        setError("Invalid file type. Only JPEG, PNG, and GIF are allowed.");
        return;
      }

      setImage(selectedFile); // Set the file if validations pass

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewURL(null);
      setImage(null);
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (!image) {
      setError("No image selected.");
      return; // Stop if no image
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("message", "simple string sent to the server");

    console.log(formData)

    try {
      const response = await axios.post(`${url}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("uploaded Response", response.data);
      setImage(null);
      setPreviewURL(null); // Clear preview after successful upload
    } catch (error) {
      console.error("Upload Error", error);
      setError("Upload failed. Please try again."); // More user-friendly error
      setImage(null);
    }
  };

  return (
    <div className="dark:text-gray-100">
      <h1 className="dark:text-gray-100">Home</h1>
      <div className="">
        <form className="max-w-sm" onSubmit={handleImageSubmit}>
          <label htmlFor="file-input" className="sr-only">
            Choose file
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            name="file-input"
            id="file-input"
            className="uploader"
            accept="image/jpeg, image/png, image/gif" // Limit accepted file types in the browser
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
          {/* Display error */}
          <Button className="mt-4" type="submit" variant="primary">
            Upload
          </Button>
        </form>
        {previewURL && (
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
