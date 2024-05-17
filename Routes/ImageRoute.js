const ImageController = require("../Controller/ImageController");
const express = require("express");
const router = express.Router();

router.post("/postImage", ImageController.uploadImage);
router.get("/getImage", ImageController.getAllImages);
// Export the router
module.exports = router;
