const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
  res.send("AWS CodePipeline Node.js App is Live. This is now live on me. Hello there from SHAFIN");
});

const PORT = process.env.PORT || 3000;
const HOSTNAME = os.hostname();

app.listen(PORT, () => {
  console.log("Server started successfully");
  console.log(`Hostname: ${HOSTNAME}`);
  console.log(`Local URL: http://localhost:${PORT}`);
});
