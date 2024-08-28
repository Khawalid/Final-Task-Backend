const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  price: Number, // Price in PKR
  amenities: [String],
});

const cateringSchema = new mongoose.Schema({
  dishName: String,
  pricePerPerson: Number, // Price per plate in PKR
});

const photographySchema = new mongoose.Schema({
  packageName: String,
  price: Number, // Package price in PKR
  description: String, // Description of what's included in the package
});

const soundSystemSchema = new mongoose.Schema({
  packageName: String,
  price: Number, // Package price in PKR
  description: String, // Description of what's included in the package
});

const vendorSchema = new mongoose.Schema({
  vendorId: String,
  name: String,
  services: {
    venue: [venueSchema],
    catering: {
      starters: [cateringSchema],
      mainDishes: [cateringSchema],
      desserts: [cateringSchema],
    },
    photography: [photographySchema],
    soundSystem: [soundSystemSchema],
  },
});

module.exports = mongoose.model('Vendor', vendorSchema);
