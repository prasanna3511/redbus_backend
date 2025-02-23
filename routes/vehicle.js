const express = require("express");
const {
    addVehicle,
    getVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle
} = require("../controller/vehicle");

const router = express.Router();

router.post("/addVehicle", addVehicle);
router.get("/getVehicles", getVehicles);
router.get("/getVehicle", getVehicleById);
router.put("/updateVehicle", updateVehicle);
router.delete("/deleteVehicle", deleteVehicle);

module.exports = router;
