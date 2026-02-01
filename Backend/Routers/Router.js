import express from "express";
import fileUploader from "../controller/fileUploader.js";
const router = express.Router();
import upload from "../Utils/Multer.js";
router.post("/uploadImage", upload.single("image"), fileUploader);
// router.use("/uploadImage");
router.get("/test", (req, res) => {
  res.send("Router working");
});

export default router;
