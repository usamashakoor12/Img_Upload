const express = require("express")
const app = express();
require("./db/conn");
const router = require("./routes/route");
const cors = require("cors")

const PORT = 8005;

app.use(express.json());
app.use(cors());
app.use(router);

app.use("/uploads", express.static("./uploads"));


app.listen(PORT, ()=>(
    console.log(`Server is running at prot ${PORT}`)
))