const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

// CRUD protegido
router.post("/", auth, taskController.create);
router.get("/", auth, taskController.getAll);
router.put("/:id", auth, taskController.update);
router.delete("/:id", auth, taskController.remove);

// TEST PUBLICO (IMPORTANTE PARA VER SI FUNCIONA)
router.get("/test", (req, res) => {
  res.json({ ok: true, message: "tasks route working" });
});

module.exports = router;