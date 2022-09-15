const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

router.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
  res.status(404);
});

module.exports = router;
