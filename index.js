const express = require("express");
const path = require("path");
const router = require("./routes/routes");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.use("/", router);
app.use("/about", router);
app.use("/contact", router);
app.use("*", router);

app.listen(8080, () => {
  console.log("server listening on port 8080...");
});
