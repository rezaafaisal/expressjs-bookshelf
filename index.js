import express from "express";
import mongoose from "mongoose";
import route from "./routes/app.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/bookshelf_db", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.on("error", (error) => {console.error(error)})
db.once("open", ()=>{console.log('berhasil')})

app.use(express.json());
app.use(route);

app.listen('3000', ()=>{
    console.log('Server running at port 3000');
})