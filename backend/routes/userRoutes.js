const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all users (Admin Only)
router.get("/:id", protect, getUserById); // Get a specific User
router.get("/:id", protect, adminOnly, deleteUser); // Delete user (Admin Only)

module.exports = router;