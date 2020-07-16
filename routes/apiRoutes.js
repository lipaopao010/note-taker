const express = require("express");
const router = express.Router();
const notes = require("../db/notes");


router.get("/notes", (req, res) => {
    notes
      .getNotes()
      .then((notes) => res.json(notes))
      .catch((err) => res.status(500).json(err));
  });

//   * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

router.post("/notes", (req, res) => {
    notes
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });

//   * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. 
//This means you'll need to find a way to give each note a unique `id` when it's saved.
// In order to delete a note, you'll need to read all notes from the `db.json` file, 
//remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
router.delete("/notes/:id", (req, res) => {
    notes
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
  
  module.exports = router;