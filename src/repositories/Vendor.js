const Vendor = require("../models/Vendor");
const { capacityRanges } = require("../../constants/VenueCapacities");
exports.findVenues = async (numberOfPeople) => {
  // Find the smallest capacity that is larger than or equal to the numberOfPeople
  const minCapacity = capacityRanges.find(
    (capacity) => capacity >= numberOfPeople
  );

  return await Vendor.aggregate([
    { $unwind: "$services.venue" },
    {
      $match: {
        "services.venue.capacity": {
          $gte: minCapacity, // Match venues with at least the calculated minCapacity
          $lt:
            capacityRanges[capacityRanges.indexOf(minCapacity) + 1] || Infinity, // Match venues less than the next larger capacity or no limit if none
        },
      },
    },
    { $sort: { "services.venue.price": 1 } },
  ]);
};

exports.findCatering = async (category, dish) => {
  return await Vendor.aggregate([
    { $unwind: `$services.catering.${category}` },
    { $match: { [`services.catering.${category}.dishName`]: dish } },
    { $sort: { [`services.catering.${category}.pricePerPerson`]: 1 } },
  ]);
};

exports.findPhotographyPackage = async (packageName) => {
  return await Vendor.aggregate([
    { $unwind: "$services.photography" },
    { $match: { "services.photography.packageName": packageName } },
    { $sort: { "services.photography.price": 1 } },
  ]);
};

exports.findSoundSystemPackage = async (packageName) => {
  return await Vendor.aggregate([
    { $unwind: "$services.soundSystem" },
    { $match: { "services.soundSystem.packageName": packageName } },
    { $sort: { "services.soundSystem.price": 1 } },
  ]);
};
