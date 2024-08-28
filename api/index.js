const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Require mongoose
const morgan = require("morgan");
require("dotenv").config();
const vendorRoutes = require("../src/routes/Vendor");
const logger = require("../utils/logger");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger-output.json");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan("combined"));
app.use(logger);
// Routes
app.use("/", vendorRoutes);
// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
