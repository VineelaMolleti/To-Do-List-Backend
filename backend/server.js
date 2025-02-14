require("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const connectDb=require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const app=express();
const PORT =  5000;

const cors=require("cors");
app.use(cors());
app.use(bodyParser.json());

connectDb();

app.use("/api/tasks",taskRoutes);

app.listen(PORT,()=>{
    console.log(`Server runnig on port ${PORT}`)
});
