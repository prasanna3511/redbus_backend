const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const authRoutes = require("./routes/auth");
const vehicleRoutes = require("./routes/vehicle");
const createTrip = require("./routes/createtrip")
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(bodyParser.json());

// io.on('connection', (socket) => {
//     console.log('A user connected:', socket.id);
//     socket.on('sendMessage', async (data) => {
//         const { userId, message } = data;
//         console.log("message : ",message)
//             io.emit('receiveMessage', message);
//     });

//     socket.on('disconnect', () => {
//         console.log('A user disconnected:', socket.id);
//     });
// });
app.use("/api", authRoutes);
app.use("/api", vehicleRoutes);
app.use("/api", createTrip);
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
