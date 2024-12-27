// const { type } = require('express/lib/response');
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  richDescription: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  },

  images: [
    {
      type: String,
    },
  ],

  brand: {
    type: String,
    default: "",
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  rating: {
    type: Number,
    default: 0,
  },

  numReviews: {
    type: Number,
    default: 0,
  },

  isFeaured: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
