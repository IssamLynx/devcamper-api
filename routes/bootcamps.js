const express =require('express');

// Include other resource routers
const courseRouter = require('./course');

const router =express.Router();
// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

const {
getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp,bootcampPhotoUpload
}=require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);
router.route('/:id/photo').put(bootcampPhotoUpload)
module.exports=router;