/*
step 1 pehle terminal ma command run kro npm init -y
step 2 dusri command npm i express mongoose
step 3 server folder and src folder banao then src folder ma app.js ki textfile banao  
step 4 appjs ma express require kro use ek app name ke variale ma save kro phir ye line likho 
app.use(express.json());
phir module.export = app likho 
phir server.js ma app ko require krenge
phir ye likho  app.listen(3000, () => {
  console.log("Server running on port 3000");

  ab server ko data base se connect krna ha usk lie sc folder ke ander db folder banaenge phir uske ander db,js ki text file banaenge

  ab db,js ma hum pehle mongoose require krenge  // const mongoose = require('mongoose');
  phir ye function likhemge:

  async function connectDb() {
  
      await mongoose.connect("mongodb+srv://CompleteBackend:l6Y4p8FuAiT2VBZ7@completebacked.pqnmcss.mongodb.net/harry");
      console.log('connected to db'); 
  };
  is function ko apne server credentials ke hisab se manipulate krenge jese url change krni hui and all
  phir is function ko dbjs se export krwakr server js ma require krenge and connect db() krke apni database connect krlenge

  ab jab bh aapko apne databse ma datasave krate ha then aap pehle database ko batate ha ke data kis type ka hoga jese is case ma hume notes store karane ha 
  so hum notes ki type bataenge is procces ko hum kehte ha schema banana
  schema banane ke lie aap pehle src ke ander models name ki file banao ge and usme note.model.js name ki file banao ge
  schema banane ke lie aap sab se pehle mongoose require kroge
  phir hum schema banaenge aur apne hisab se jo data type ha wo define krenge
  const noteSchema = new mongoose.Schema({
      title : String,
      description : String
  })
      phr hum note model create krenge takke db ma CRUD operations perform krpae wese iske begair bh krskte but isko use krne se kaafi lines of code hamari save hoti ha  
      const noteModel = mongoose.model("note",noteSchema)
      phr note model ko export krenge and app.js ma isse require krenge 

*/ 

const app = require("./src/app");
const connectDb = require("./src/db/db");
connectDb();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
