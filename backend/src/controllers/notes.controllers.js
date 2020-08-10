const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find(); // retorna un arreglo
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    res.json({message: 'Note Saved'})
}

notesCtrl.getNote = (req, res) => res.json({message: 'Note'})

notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated'})

notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted'})

module.exports = notesCtrl;