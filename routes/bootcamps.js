const express =require('express');

// Include other resource routers
const courseRouter = require('./course');

const router =express.Router();
// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
const {protect} = require("../middleware/auth");
const {
getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp,bootcampPhotoUpload
}=require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(protect,createBootcamp);
router.route('/:id').get(getBootcamp).put(protect,updateBootcamp).delete(protect,deleteBootcamp);
router.route('/:id/photo').put(protect,bootcampPhotoUpload);
module.exports=router;