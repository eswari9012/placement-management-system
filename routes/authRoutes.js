const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Student = require("../models/Student");

const router = express.Router();


// REGISTER

router.post("/register",async(req,res)=>{

    try{

        const {
            name,
            email,
            password,
            branch,
            year
        } = req.body;

        const existingUser =
        await Student.findOne({email});

        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });
        }

        const hashedPassword =
        await bcrypt.hash(password,10);

        const student =
        await Student.create({
            name,
            email,
            password:hashedPassword,
            branch,
            year
        });

        const studentData = student.toObject();
delete studentData.password;
res.status(201).json({
    message: "Student Registered",
    student: studentData
});

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
});


// LOGIN

router.post("/login",async(req,res)=>{

    try{

        const {email,password}=req.body;

        const student =
        await Student.findOne({email});

        if(!student){

            return res.status(404).json({
                message:"Student Not Found"
            });
        }

        const isMatch =
        await bcrypt.compare(
            password,
            student.password
        );

        if(!isMatch){

            return res.status(400).json({
                message:"Wrong Password"
            });
        }

        const token =
        jwt.sign(
            {
                id:student._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );

        res.json({
            token,
            student
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
});

module.exports = router;