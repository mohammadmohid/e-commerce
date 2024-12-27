"use client";

import { useState } from "react";

export default function ProductForm({
  onSubmit,
  initialData = null,
  categories,
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    richDescription: "",
    brand: "",
    price: "",
    category: "",
    countInStock: "",
    isFeatured: false,
    ...initialData,
  });
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      if (mainImage) formDataToSend.append("image", mainImage);
      additionalImages.forEach((img) => {
        formDataToSend.append("images", img);
      });
      await onSubmit(formDataToSend);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />

      <textarea
        placeholder="Rich Description"
        value={formData.richDescription}
        onChange={(e) =>
          setFormData({ ...formData, richDescription: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Brand"
        value={formData.brand}
        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />

      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="" disabled>
          Select Category
        </option>{" "}
        {/* Placeholder */}
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Count in Stock"
        value={formData.countInStock}
        onChange={(e) =>
          setFormData({ ...formData, countInStock: e.target.value })
        }
        required
      />

      <div>
        <label className="block mb-2">Main Image</label>
        <input
          type="file"
          onChange={(e) => setMainImage(e.target.files[0])}
          accept="image/*"
        />
      </div>

      <div>
        <label className="block mb-2">Additional Images</label>
        <input
          type="file"
          multiple
          onChange={(e) => setAdditionalImages(Array.from(e.target.files))}
          accept="image/*"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={formData.isFeatured}
          onChange={(e) =>
            setFormData({ ...formData, isFeatured: e.target.checked })
          }
        />
        <label>Featured Product</label>
      </div>

      <button type="submit" disabled={loading}>
        {loading
          ? "Saving..."
          : initialData
          ? "Update Product"
          : "Create Product"}
      </button>
    </form>
  );
}
