const express =require('express');

// Include other resource routers
const courseRouter = require('./course');

const router =express.Router();
// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
const {protect, authorize} = require("../middleware/auth");
const {
getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp,bootcampPhotoUpload
}=require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(protect,createBootcamp);
router.route('/:id').get(getBootcamp).put(protect,authorize('admin','publisher'),updateBootcamp).delete(protect,authorize('admin','publisher'),deleteBootcamp);
router.route('/:id/photo').put(protect,authorize('admin','publisher'),bootcampPhotoUpload);
module.exports=router;