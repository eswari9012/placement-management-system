require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes =
require("./routes/authRoutes");

const studentRoutes = require("./routes/studentRoutes");

const companyRoutes = require("./routes/companyRoutes");

const jobRoutes = require("./routes/jobRoutes");

const applicationRoutes =
require("./routes/applicationRoutes");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);

app.use("/api/student", studentRoutes);

app.use("/api/companies", companyRoutes);

app.use("/api/jobs", jobRoutes);



app.use("/api/applications", applicationRoutes);

console.log("Mongo URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("Placement API Running");
});

app.listen(process.env.PORT,()=>{
    console.log(
        `Server Running on Port ${process.env.PORT}`
    );
});