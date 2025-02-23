const express = require("express");
const {
    addTrip,
    getTrips,
    getTripById,
    updateTrip,
    deleteTrip
} = require("../controller/createtrip");

const router = express.Router();

router.post("/addTrip", addTrip);
router.get("/getTrips", getTrips);
router.get("/getTripbyid", getTripById);
router.put("/updateTrip", updateTrip);
router.delete("/deleteTrip", deleteTrip);

module.exports = router;
