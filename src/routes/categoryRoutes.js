const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const categoryController = require("../controllers/categoryController");

// CRUD protegido
router.post("/", auth, categoryController.create);
router.get("/", auth, categoryController.getAll);
router.put("/:id", auth, categoryController.update);
router.delete("/:id", auth, categoryController.remove);

// TEST PUBLICO (sin auth para evitar errores)
router.get("/test", (req, res) => {
  res.json({ ok: true, message: "categories route working" });
});

module.exports = router;