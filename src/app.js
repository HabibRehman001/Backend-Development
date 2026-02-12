const express = require('express');
let app = express();
app.use(express.json());
const noteModel = require('./models/note.model')

// POST /notes => Create a note
// GET /notes => Get all notes
// DELETE /notes/:id => Delete a note
// PATCH /notes/:id => Update a note

app.post("/notes" , async (req,res) => {
    const data = req.body;
    await noteModel.create({
        title : data.title,
        description : data.description
    })
    res.status(201).json({message:'Data Saved Successfully'})
})
app.get("/notes", async (req,res) => {
    const notes = await noteModel.find({
        title:'AbdulRehman'
    });
    res.status(200).json({messgage:'Notes Fetched Successfull!!',notes:notes});
})

module.exports = app 