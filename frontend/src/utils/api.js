export const API_LINK = "http://localhost:5000/api";

// Product API functions
export const fetchProducts = async () => {
  const response = await fetch(
    "http://localhost:5000/api/products/getProducts"
  );
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(
    `http://localhost:5000/api/products/getProduct/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json();
};

export const createProduct = async (formData) => {
  const response = await fetch(
    "http://localhost:5000/api/products/addProduct",
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) throw new Error("Failed to create product");
  return response.json();
};

export const updateProduct = async (id, formData) => {
  const response = await fetch(
    `http://localhost:5000/api/products/updateProduct/${id}`,
    {
      method: "PUT",
      body: formData,
    }
  );
  if (!response.ok) throw new Error("Failed to update product");
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(
    `http://localhost:5000/api/products/deleteProduct/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("Failed to delete product");
  return response.json();
};

export const deleteProductImage = async (productId, imageIndex) => {
  const response = await fetch(
    `http://localhost:5000/api/products/${productId}/images/${imageIndex}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) throw new Error("Failed to delete image");
  return response.json();
};

// Category API functions
export const fetchCategories = async () => {
  const response = await fetch(
    "http://localhost:5000/api/categories/getCategory"
  );
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
};

export const createCategory = async (formData) => {
  const response = await fetch(
    "http://localhost:5000/api/categories/createCategory",
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) throw new Error("Failed to create category");
  return response.json();
};

export const deleteCategory = async (id) => {
  const response = await fetch(
    `http://localhost:5000/api/categories/deleteCategory/${id}`,
    {
      method: "POST",
    }
  );
  if (!response.ok) throw new Error("Failed to delete category");
  return response.json();
};
