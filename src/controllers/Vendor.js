// controllers/eventController.js
const eventService = require("../services/Vendor");
exports.createEvent = async (req, res) => {
  try {
    const userInput = req.body;
    const { finalPackage, totalCost } = await eventService.createEventPackage(
      userInput
    );
    res.status(200).json({ finalPackage, totalCost });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
