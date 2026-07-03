require("dotenv").config();

const taskRoutes=require("./routes/taskRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tasks",taskRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("🚀 API Task Manager funcionando correctamente");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});