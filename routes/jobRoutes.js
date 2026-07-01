const express = require("express");
const router = express.Router();

const Job = require("../models/Job");

router.post("/", async (req, res) => {
    try {
        const job = await Job.create(req.body);

        res.status(201).json({
            message: "Job Created",
            job
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find().populate("company");

        res.json(jobs);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;