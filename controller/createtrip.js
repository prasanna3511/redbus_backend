const DBAgent = require("../db");

// 1. Add a Trip
exports.addTrip = async (req, res) => {
    try {
        const { fromlocation, tolocation, startdate, enddate, starttime, endtime, price, type } = req.body;

        const query = `INSERT INTO createtrip (fromlocation, tolocation, startdate, enddate, starttime, endtime, price, type) 
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;
        const values = [fromlocation, tolocation, startdate, enddate, starttime, endtime, price, type];

        const response = await DBAgent.query(query, values);
        res.status(201).json({ status: 1, message: "Trip added successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Add trip error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 2. Get All Trips
exports.getTrips = async (req, res) => {
    try {
        const response = await DBAgent.query(`SELECT * FROM createtrip;`);
        res.status(200).json({ status: 1, data: response.rows });
    } catch (e) {
        console.log("Get trips error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 3. Get Trip by ID
exports.getTripById = async (req, res) => {
    try {
        const { id } = req.body;
        const query = `SELECT * FROM createtrip WHERE id = $1;`;
        const response = await DBAgent.query(query, [id]);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "Trip not found" });
        }

        res.status(200).json({ status: 1, data: response.rows[0] });
    } catch (e) {
        console.log("Get trip by ID error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 4. Update Trip
exports.updateTrip = async (req, res) => {
    try {
   
        const { fromlocation, tolocation, startdate, enddate, starttime, endtime, price, type ,id} = req.body;

        const query = `UPDATE createtrip 
                       SET fromlocation = $1, tolocation = $2, startdate = $3, enddate = $4, starttime = $5, endtime = $6, price = $7, type = $8
                       WHERE id = $9 RETURNING *;`;
        const values = [fromlocation, tolocation, startdate, enddate, starttime, endtime, price, type, id];

        const response = await DBAgent.query(query, values);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "Trip not found or no changes made" });
        }

        res.status(200).json({ status: 1, message: "Trip updated successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Update trip error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 5. Delete Trip
exports.deleteTrip = async (req, res) => {
    try {
        const { id } = req.body;
        const query = `DELETE FROM createtrip WHERE id = $1 RETURNING *;`;
        const response = await DBAgent.query(query, [id]);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "Trip not found" });
        }

        res.status(200).json({ status: 1, message: "Trip deleted successfully" });
    } catch (e) {
        console.log("Delete trip error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};
