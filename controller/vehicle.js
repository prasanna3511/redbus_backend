const DBAgent = require("../db");

// 1. Add a Vehicle
exports.addVehicle = async (req, res) => {
    try {
        const { seats_count, luggage_count, bus_no, category, type } = req.body;

        const query = `INSERT INTO addvehicle (seats_count, luggage_count, bus_no, category, type) 
                       VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
        const values = [seats_count, luggage_count, bus_no, category, type];

        const response = await DBAgent.query(query, values);
        res.status(201).json({ status: 1, message: "Vehicle added successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Add vehicle error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 2. Get All Vehicles
exports.getVehicles = async (req, res) => {
    try {
        const response = await DBAgent.query(`SELECT * FROM addvehicle;`);
        res.status(200).json({ status: 1, data: response.rows });
    } catch (e) {
        console.log("Get vehicles error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 3. Get Vehicle by ID
exports.getVehicleById = async (req, res) => {
    try {
        const { id } = req.body;
        const query = `SELECT * FROM addvehicle WHERE id = $1;`;
        const response = await DBAgent.query(query, [id]);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "Vehicle not found" });
        }

        res.status(200).json({ status: 1, data: response.rows[0] });
    } catch (e) {
        console.log("Get vehicle by ID error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 4. Update Vehicle
exports.updateVehicle = async (req, res) => {
    try {
        const { seats_count, luggage_count, bus_no, category, type , id } = req.body;

        const query = `UPDATE addvehicle 
                       SET seats_count = $1, luggage_count = $2, bus_no = $3, category = $4, type = $5 
                       WHERE id = $6 RETURNING *;`;
        const values = [seats_count, luggage_count, bus_no, category, type, id];

        const response = await DBAgent.query(query, values);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "Vehicle not found or no changes made" });
        }

        res.status(200).json({ status: 1, message: "Vehicle updated successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Update vehicle error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

// 5. Delete Vehicle
exports.deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM addvehicle WHERE id = $1 RETURNING *;`;
        const response = await DBAgent.query(query, [id]);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "Vehicle not found" });
        }

        res.status(200).json({ status: 1, message: "Vehicle deleted successfully" });
    } catch (e) {
        console.log("Delete vehicle error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};
