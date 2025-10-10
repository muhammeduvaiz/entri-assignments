const mongoose = require('mongoose');

const prodectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    stock: {
      type: Number,
      required: true,
      default: 0
    },
    totalStock: {
      type: Number,
      required: true,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const ProdectModel = mongoose.model('Prodect', prodectSchema);
module.exports = ProdectModel;