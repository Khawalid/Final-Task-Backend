const mongoose = require("mongoose");
const Vendor = require("../src/models/Vendor");
const vendors = require("../constants/Vendors");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Vendor.insertMany(vendors)
  .then(() => {
    console.log("Vendors inserted successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting vendors:", err);
  });
