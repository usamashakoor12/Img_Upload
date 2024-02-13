const mongoose = require("mongoose")

const DB = "mongodb+srv://shakoorqariusama:H.Usama123@crud.aqciwmz.mongodb.net/ImgUpload?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("Connection Successfully")).catch((err)=> console.log("error" + err.message))