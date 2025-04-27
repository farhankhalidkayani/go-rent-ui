import React, { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Select from "../components/common/Select";
import "./CreateListingPage.css";

const categoryOptions = [
  { value: "cars", label: "Cars" },
  { value: "electronics", label: "Electronics" },
  { value: "home_appliances", label: "Home Appliances" },
  { value: "sports", label: "Sports & Outdoors" },
  { value: "tools", label: "Tools & Equipment" },
  { value: "fashion", label: "Fashion & Accessories" },
];

const conditionOptions = [
  { value: "new", label: "New / Excellent" },
  { value: "very_good", label: "Very Good" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
];

const CreateListingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    securityDeposit: "",
    condition: "",
    location: "",
    images: [] as File[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      if (filesArray.length + formData.images.length > 5) {
        setErrors((prev) => ({
          ...prev,
          images: "You can upload a maximum of 5 images",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...filesArray],
      }));

      const filePreviewsArray = filesArray.map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews((prev) => [...prev, ...filePreviewsArray]);

      if (errors.images) {
        setErrors((prev) => ({ ...prev, images: "" }));
      }
    }
  };

  const removeImage = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));

    URL.revokeObjectURL(imagePreviews[indexToRemove]);
    setImagePreviews((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 30) {
      newErrors.description = "Description must be at least 30 characters";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a valid positive number";
    }

    if (
      formData.securityDeposit &&
      (isNaN(Number(formData.securityDeposit)) ||
        Number(formData.securityDeposit) < 0)
    ) {
      newErrors.securityDeposit = "Security deposit must be a valid number";
    }

    if (!formData.condition) {
      newErrors.condition = "Condition is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (formData.images.length === 0) {
      newErrors.images = "At least one image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // In a real implementation, you would upload the images and the form data to your backend
        console.log("Form submitted:", formData);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert("Listing created successfully! It will be reviewed by our team.");
        // Reset form
        setFormData({
          title: "",
          category: "",
          description: "",
          price: "",
          securityDeposit: "",
          condition: "",
          location: "",
          images: [],
        });
        setImagePreviews([]);
      } catch (error) {
        console.error("Error creating listing:", error);
        alert(
          "An error occurred while creating your listing. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="create-listing-page">
      <div className="create-listing-container">
        <h1 className="create-listing-title">Create New Rental Listing</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">Basic Information</h2>
            <div className="form-row">
              <Input
                id="title"
                name="title"
                label="Title"
                placeholder="Enter a clear title for your item"
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
                required
              />
            </div>

            <div className="form-row">
              <Select
                id="category"
                name="category"
                label="Category"
                options={categoryOptions}
                value={formData.category}
                onChange={handleChange}
                error={errors.category}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="description" className="textarea-label">
                Description <span className="required">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your item in detail including features, specifications, and any usage instructions"
                className={`textarea-field ${
                  errors.description ? "textarea-error" : ""
                }`}
                required
              ></textarea>
              {errors.description && (
                <p className="error-text">{errors.description}</p>
              )}
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Pricing</h2>
            <div className="form-grid">
              <div className="form-row">
                <Input
                  id="price"
                  name="price"
                  label="Daily Rate ($)"
                  type="number"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  error={errors.price}
                  required
                />
              </div>

              <div className="form-row">
                <Input
                  id="securityDeposit"
                  name="securityDeposit"
                  label="Security Deposit ($) (Optional)"
                  type="number"
                  placeholder="0.00"
                  value={formData.securityDeposit}
                  onChange={handleChange}
                  error={errors.securityDeposit}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Item Details</h2>
            <div className="form-grid">
              <div className="form-row">
                <Select
                  id="condition"
                  name="condition"
                  label="Condition"
                  options={conditionOptions}
                  value={formData.condition}
                  onChange={handleChange}
                  error={errors.condition}
                  required
                />
              </div>

              <div className="form-row">
                <Input
                  id="location"
                  name="location"
                  label="Location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleChange}
                  error={errors.location}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Images</h2>
            <div className="image-upload-container">
              <label className="image-label">
                Upload Photos <span className="required">*</span>{" "}
                <span className="image-hint">(Max 5 images)</span>
              </label>

              <div className="drop-zone">
                <div className="upload-text">
                  <svg
                    className="upload-icon"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="file-upload-text">
                    <label htmlFor="images" className="upload-link">
                      Upload images
                    </label>
                    <input
                      id="images"
                      name="images"
                      type="file"
                      className="hidden-input"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      disabled={formData.images.length >= 5}
                    />
                    <span> or drag and drop</span>
                  </div>
                  <p className="file-hint">PNG, JPG, GIF up to 5MB each</p>
                </div>
              </div>

              {errors.images && <p className="error-text">{errors.images}</p>}
            </div>

            {imagePreviews.length > 0 && (
              <div className="previews-container">
                <h3 className="previews-title">Image Previews</h3>
                <div className="image-grid">
                  {imagePreviews.map((src, index) => (
                    <div key={index} className="image-preview">
                      <img
                        src={src}
                        alt={`Preview ${index + 1}`}
                        className="preview-image"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="remove-button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="remove-icon"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="form-footer">
            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? "Creating Listing..." : "Create Listing"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateListingPage;
