const express=require("express");

const router=express.Router();
const userController=require("../controllers/userController");


router.post("/register",userController.register);
router.post("/login", userController.login);
router.get(

    "/verify/:token",

    userController.verify

);
router.get("/", (req, res) => {
  res.json({ ok: true, message: "Users route working" });
});
module.exports=router;