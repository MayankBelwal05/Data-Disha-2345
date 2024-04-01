
import { useState } from "react";
import axios from "axios";
import Container from "../components/container/Container";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startDateTime: "",
    endDateTime: "",
    categoryId: "",
    price: "",
    isFree: false,
    url: "",
    imageUrl: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    const inputName = type === "file" ? "imageUrl" : name;

    setFormData({ ...formData, [inputName]: inputValue });

    if (type === "file" && files && files[0]) {
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post("/events", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Event created successfully:", response.data);
      // Reset form after successful submission
      setFormData({
        title: "",
        description: "",
        location: "",
        startDateTime: "",
        endDateTime: "",
        categoryId: "",
        price: "",
        isFree: false,
        url: "",
        imageUrl: null,
      });
      setImageUrl(null);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errorMessages = error.response.data.errors.map((err) => err.msg);
        setErrorMessage(errorMessages.join(", "));
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        setErrorMessage(error.response.data.error);
      } else {
        console.error("Error submitting event:", error);
        setErrorMessage("Failed to submit event");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="py-5 md:py-10">
        <h2 className="wrapper h2-bold text-center text-primary-500">
          Create Events
        </h2>
      </div>
      <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-5 py-5 md:py-10">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full">
              <input
                type="text"
                placeholder="Event title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              />
            </div>
            <div className="w-full">
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              >
                <option value="">Category</option>
                {/* Options */}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full">
              <textarea
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="textarea rounded-2xl w-full h-72 outline-none"
              />
            </div>

            <div className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 w-full">
              {/* File input */}
              <input
                id="fileInput"
                type="file"
                name="imageUrl"
                onChange={handleInputChange}
                className="hidden" // Hide the file input
              />
              {/* Display area */}
              {imageUrl ? (
                <div className="flex h-full w-full flex-1 justify-center ">
                  <img
                    src={imageUrl}
                    alt="image"
                    width={250}
                    height={250}
                    className="w-full object-cover object-center"
                  />
                </div>
              ) : (
                <div className="flex-center flex-col py-5 text-grey-500">
                  <img
                    src="/icons/upload.svg"
                    width={77}
                    height={77}
                    alt="file upload"
                  />
                  <h3 className="mb-2 mt-2">Drag photo here</h3>
                  <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
                  <button
                    type="button"
                    className="rounded-full bg-primary-500 px-8 py-3 text-white"
                    onClick={() => document.getElementById("fileInput").click()} // Click event to trigger file input
                  >
                    Select from computer
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full flex-center h-[54px] overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <img
                src="/icons/location-grey.svg"
                alt="location"
                className="w-[24px] h-[24px]"
              />
              <input
                type="text"
                placeholder="Event location or Online"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              />
            </div>
            <div className="w-full flex-center h-[54px] overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <img
                src="/icons/rupee.svg"
                alt="rupee"
                className="w-[24px] h-[24px]"
              />
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              />
              <div className="flex items-center">
                <label
                  htmlFor="isFree"
                  className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Free Ticket
                </label>
                <input
                  type="checkbox"
                  name="isFree"
                  checked={formData.isFree}
                  onChange={handleInputChange}
                  className="mr-2 h-5 w-5 border-2 border-primary-500"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full flex-center h-[54px] overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <img
                src="/icons/calendar-dark.svg"
                alt="calendar"
                className="w-[24px] h-[24px]"
              />
              <p className="ml-3 whitespace-nowrap text-grey-600">
                Start Date:
              </p>

              <input
                type="datetime-local"
                name="startDateTime"
                value={formData.startDateTime}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              />
            </div>
            <div className="w-full flex-center h-[54px] overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <img
                src="/icons/calendar-dark.svg"
                alt="calendar"
                className="w-[24px] h-[24px]"
              />
              <p className="ml-3 whitespace-nowrap text-grey-600">End Date:</p>
              <input
                type="datetime-local"
                name="endDateTime"
                value={formData.endDateTime}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full flex-center h-[54px] overflow-hidden rounded-full bg-grey-50 px-4 py-2">
              <img
                src="/icons/link.svg"
                alt="location"
                className="w-[24px] h-[24px]"
              />
              <input
                type="text"
                placeholder="URL"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                className="input-field w-full outline-none"
              />
            </div>
            {/* Other fields */}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="button w-full bg-primary-500 md:w-auto md:px-8 text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Event"}
          </button>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </Container>
  );
};

export default CreateEventForm;
