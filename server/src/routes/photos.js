const router = require("express").Router()
// const path = require('path')
// const multer = require('multer')
const {
  getPhoto,
  getAllPhotos,
  getPhotosFromCategory,
  getSimilarPhotos,
  uploadPhotos,
  deletePhoto,
} = require("../controllers/photos")
const { verifyToken } = require("../middlewares/auth")

router.route("/").get(getAllPhotos).post(verifyToken, uploadPhotos)
router.route("/id/:id").get(getPhoto).delete(verifyToken, deletePhoto)
router.get("/category/:category", getPhotosFromCategory)
router.post("/similar", getSimilarPhotos)

module.exports = router
