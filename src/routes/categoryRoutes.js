const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const categoryController = require("../controllers/categoryController");

router.post("/", auth, categoryController.create);

router.get("/", auth, categoryController.getAll);

router.put("/:id", auth, categoryController.update);

router.delete("/:id", auth, categoryController.remove);

module.exports = router;