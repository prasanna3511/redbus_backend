const DBAgent = require("../db");

exports.testapi = async (req, res) => {
    try {
      let response = await DBAgent.query(`SELECT * FROM users;`);
    // console.log("testing data :", response)
      res.status(200).json({ status: 1, data: response });

    } catch (e) {
      console.log("Get plan error: " + e);
      res.status(500).json({ message: "Server Error : " + e });
    }
  };

  exports.addUser = async (req, res) => {
    try {
        const { name, email, status, password } = req.body;

        const query = `INSERT INTO users (name, email, status, password) VALUES ($1, $2, $3, $4) RETURNING *;`;
        const values = [name, email, status, password];

        const response = await DBAgent.query(query, values);

        res.status(201).json({ status: 1, message: "User added successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Add user error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const response = await DBAgent.query(`SELECT * FROM users;`);
        res.status(200).json({ status: 1, data: response.rows });
    } catch (e) {
        console.log("Get users error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.body;

        const query = `SELECT * FROM users WHERE id = $1;`;
        const response = await DBAgent.query(query, [id]);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "User not found" });
        }

        res.status(200).json({ status: 1, data: response.rows[0] });
    } catch (e) {
        console.log("Get user by ID error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email, status, password ,id} = req.body;

        const query = `UPDATE users SET name = $1, email = $2, status = $3, password = $4 WHERE id = $5 RETURNING *;`;
        const values = [name, email, status, password, id];

        const response = await DBAgent.query(query, values);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "User not found or no changes made" });
        }

        res.status(200).json({ status: 1, message: "User updated successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Update user error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.body;

        const query = `UPDATE users SET status = 'deactive' WHERE id = $1 RETURNING *;`;
        const values = [ id];

        const response = await DBAgent.query(query, values);

        if (response.rows.length === 0) {
            return res.status(404).json({ status: 0, message: "User not found or no changes made" });
        }

        res.status(200).json({ status: 1, message: "User updated successfully", data: response.rows[0] });
    } catch (e) {
        console.log("Update user error: " + e);
        res.status(500).json({ message: "Server Error: " + e });
    }
};

