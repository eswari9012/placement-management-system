const express = require("express");
const router = express.Router();

const Company = require("../models/Company");


// ADD COMPANY

router.post("/", async (req, res) => {

    try {

        const company = await Company.create(req.body);

        res.status(201).json({
            message: "Company Added",
            company
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// GET ALL COMPANIES

router.get("/", async (req, res) => {

    try {

        const companies = await Company.find();

        res.json(companies);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;