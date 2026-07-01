const express = require("express");
const router = express.Router();

const Application = require("../models/application");
const verifyToken = require("../middleware/authMiddleware");

// Apply for Job
router.post("/:jobId", verifyToken, async (req, res) => {

    try {

        const existingApplication =

        await Application.findOne({

            student: req.user.id,

            job: req.params.jobId

        });

        if (existingApplication) {

            return res.status(400).json({

                message:

                "Already Applied"

            });

        }

        const application =

        await Application.create({

            student: req.user.id,

            job: req.params.jobId

        });

        res.status(201).json({

            message:

            "Application Submitted",

            application

        });

    }

    catch(error){

        res.status(500).json({

            message:

            error.message

        });

    }

});

module.exports = router;

router.get("/my", verifyToken, async (req, res) => {

    try {

        const applications = await Application.find({
            student: req.user.id
        })
        .populate({
            path: "job",
            populate: {
                path: "company"
            }
        });

        res.json(applications);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

router.put("/:applicationId/status", async (req, res) => {

    try {

        const { status } = req.body;

        const application =
        await Application.findByIdAndUpdate(
            req.params.applicationId,
            { status },
            { new: true }
        );

        res.json({
            message: "Status Updated",
            application
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});