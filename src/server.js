require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://task-manager-frontend-nine-ruby.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API funcionando 🚀"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo");
});