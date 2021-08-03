//@desc     GET all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps =(req,res,next) => {
    res.status(200).json({success:true,msg:'Show all bootcamps'});
};

//@desc     GET single bootcamp
//@route    GET /api/v1/bootcamp
//@access   Public
exports.getBootcamp =(req,res,next) => {
    res.status(200).json({success:true,msg:`get bootcamp ${req.params.id}`});
};

//@desc     Create bootcamp
//@route    POST /api/v1/bootcamps
//@access   Public
exports.createBootcamp =(req,res,next) => {
    res.status(200).json({success:true,msg:'add bootcamp'});
};

//@desc     Update single bootcamps
//@route    PUT /api/v1/bootcamp/:id
//@access   Public
exports.updateBootcamp =(req,res,next) => {
    res.status(200).json({success:true,msg:`edit bootcamp ${req.params.id}`});

};

//@desc     delete single bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   Public
exports.deleteBootcamp =(req,res,next) => {
    res.status(200).json({success:true,msg:`delete bootcamp ${req.params.id}`});
};