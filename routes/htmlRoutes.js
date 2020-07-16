const express = require("express");
const router = express.Router();
const path = require("path");



// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

// GET `/notes` - Should return the `notes.html` file.
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

// GET `*` - Should return the `index.html` file
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;

  