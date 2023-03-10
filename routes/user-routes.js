const express = require("express");
const userController = require("../controllers/user-controller");

const router = express.Router();

router.get("/", userController.getAllUser);
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;
