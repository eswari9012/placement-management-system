const express = require("express");
const router = express.Router();

const Student = require("../models/Student");
const verifyToken = require("../middleware/authMiddleware");

// ==========================
// GET PROFILE (Protected)
// ==========================
router.get("/profile", verifyToken, async (req, res) => {
    try {
        const student = await Student.findById(req.user.id).select("-password");

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// ==========================
// UPDATE PROFILE (Protected)
// ==========================
router.put("/profile", verifyToken, async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.user.id,
            req.body,
            { new: true }
        ).select("-password");

        res.json({
            message: "Profile updated",
            student: updatedStudent
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;