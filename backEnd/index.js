const express=require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cloudinary = require('cloudinary').v2;
const multer = require('multer'); // Import multer
const path=require('path');



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/frontEnd', express.static(path.join(__dirname, 'frontEnd'), {
  setHeaders: function (res, path) {
    res.set('Content-Type', 'text/javascript; charset=utf-8');
  }
}));
const upload = multer({ dest: 'uploads/' });

//mongodb client config
const client = new MongoClient('mongodb://localhost:27017/', {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

//   //config cloudinary
//   cloudinary.config({
//     cloud_name: 'dyptzpguf',
//     api_key: '126885484394259',
//     api_secret: 'XzHNyFmh34PIgIwrzgDBabYrdJg'
//   });

// // image upload

// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     // Check if image was uploaded
//     if (!req.file) {
//       return res.status(400).json({ message: 'No image uploaded' });
//     }

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path);
//     const imageUrl = result.secure_url;

//     // Optional: Additional processing or validation
//     // ...

//     // Send successful response with image URL
//     res.status(201).json({ url: imageUrl }); // 201 Created for successful creation
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' }); // Generic error for unexpected issues
//   }
// });



 







async function run(){
   await client.connect();
    console.log("database is connected");
  const db=client.db("FreedomFighter");
  const coll=db.collection("FFList");

  app.get('/data',async (req,res)=>{
    const data=await coll.find().toArray();
    res.send(data);
  })
  app.post('/api/FFListSubmit',async (req,res)=>{
    const data=req.body;
    const response=await coll.insertOne(data);
    res.send(response);
  })
}
run();



app.listen(1516,()=>{
    console.log("server is running ......");
})