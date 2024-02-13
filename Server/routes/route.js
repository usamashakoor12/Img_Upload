const express = require("express")
const router = new express.Router();
const multer = require("multer");
const moment = require("moment");
const users = require("../model/userShema");

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

// img filter
const  isImage = (req, file, callback)=>{
    if (file.mimetype.startsWith("image")) {
        callback(null,true)
    } else {
        callback(new Error("Only image is allow"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});


// user register
router.post("/register",upload.single("photo"),async(req, res)=>{
    const { filename } = req.file;

    const { fname } = req.body;

    if (!fname || !filename) {
        res.status(401).json({status:401,message:"fill all the record"})
    }

    try {

        const date = moment(new Date()).format("YYYY-MM-DD")

        const userData = new users({
            fname:fname,
            imgPath:filename,
            Date:date
        });

        const finelData = await userData.save();

        res.status(201).json({status:201,finelData})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

// user data get 
router.get("/getdata", async(req, res)=>{
    try {

    const userGetData = await users.find();
        res.status(201).json({status:201,userGetData})

    } catch (error) {
        res.status(401).json({status:401, error})
    }
});

// Delete USer
router.delete("/:id", async(req, res)=>{
    try {
        const {id} = req.params;

        const dltUser = await users.findByIdAndDelete({_id:id})
        res.status(201).json({status:201,dltUser})
    } catch (error) {
        res.status(401).json({status:401, error})
        
    }
})




module.exports = router;