import React, { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Select from "../components/common/Select";

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
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Create New Rental Listing</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Basic Information
            </h2>
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

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your item in detail including features, specifications, and any usage instructions"
                className={`w-full px-3 py-2 border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary`}
                required
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Item Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Images</h2>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Photos <span className="text-red-500">*</span>{" "}
                <span className="text-gray-500 font-normal">
                  (Max 5 images)
                </span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
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
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="images"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus:outline-none"
                    >
                      <span>Upload images</span>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        disabled={formData.images.length >= 5}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB each
                  </p>
                </div>
              </div>
              {errors.images && (
                <p className="mt-1 text-sm text-red-500">{errors.images}</p>
              )}
            </div>

            {imagePreviews.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Image Previews
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {imagePreviews.map((src, index) => (
                    <div key={index} className="relative">
                      <img
                        src={src}
                        alt={`Preview ${index + 1}`}
                        className="h-24 w-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 transform translate-x-1/3 -translate-y-1/3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
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

          <div className="border-t pt-6 mt-8">
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
