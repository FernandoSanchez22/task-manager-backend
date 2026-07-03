const express=require("express");

const router=express.Router();

const auth=require("../middleware/authMiddleware");

const taskController=require("../controllers/taskController");

router.post("/",auth,taskController.create);

router.get("/",auth,taskController.getAll);

router.put("/:id",auth,taskController.update);

router.delete("/:id",auth,taskController.remove);

module.exports=router;