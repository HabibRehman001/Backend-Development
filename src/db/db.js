const mongoose = require('mongoose');

async function connectDb() {

    await mongoose.connect("mongodb+srv://CompleteBackend:l6Y4p8FuAiT2VBZ7@completebacked.pqnmcss.mongodb.net/harry");
    console.log('connected to db'); 
    
    
};


module.exports = connectDb