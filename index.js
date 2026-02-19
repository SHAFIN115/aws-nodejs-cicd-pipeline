/**
 * Node.js Application deployed via AWS CodePipeline
 * Author: Shafin Junayed
 * Environment-aware, production-ready, and structured
 */

const express = require("express");
const os = require("os");
const morgan = require("morgan"); // For request logging
const helmet = require("helmet"); // Security headers

const app = express();

// Middleware
app.use(helmet()); // Basic security hardening
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined")); // Structured HTTP request logs

// Environment and configuration
const PORT = process.env.PORT || 3000;
const HOSTNAME = os.hostname();
const ENVIRONMENT = process.env.NODE_ENV || "development";

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "AWS CodePipeline Node.js App is Live, Yes it is!",
    environment: ENVIRONMENT,
    deployedBy: "Shafin Junayed",
    hostname: HOSTNAME,
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    environment: ENVIRONMENT,
    hostname: HOSTNAME,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`[INFO] Server started successfully`);
  console.log(`[INFO] Environment: ${ENVIRONMENT}`);
  console.log(`[INFO] Hostname: ${HOSTNAME}`);
  console.log(`[INFO] Application running on port ${PORT}`);
});

module.exports = app; // Export app for testing or further integration
