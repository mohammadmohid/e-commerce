const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
  },

  color: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
