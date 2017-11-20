const express = require("express")
const router = express.Router()

const Users = require("../controller/users.controller")

router.get("/", Users.getAllUsers)
router.get("/:id", Users.getAUsers)

module.exports = router
