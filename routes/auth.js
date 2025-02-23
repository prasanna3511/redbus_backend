const express = require("express");
const router = express.Router();

const {
    testapi,
    addUser,
    updateUser,
    deleteUser,getUserById,getUsers
  } = require("../controller/auth");
  
router.get("/test", testapi);
router.post("/getUserById", getUserById);
router.get("/getUsers", getUsers);
router.post("/addUser", addUser);
router.post("/updateUser", updateUser);
router.post("/deleteUser", deleteUser);
module.exports = router;