const Bootcamp = require('../models/BootCamp');

//@desc     GET all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async(req,res,next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success:true,data:bootcamp});
    } catch (error) {
        res.status(400).json({success:false});
    }
};

//@desc     GET single bootcamp
//@route    GET /api/v1/bootcamp
//@access   Public
exports.getBootcamp = async(req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp)
        {
            return res.status(400).json({success:false});

        }
        res.status(200).json({success:true,data:bootcamp});

    } catch (error) {
        res.status(400).json({success:false});

    }
};

//@desc     Create bootcamp
//@route    POST /api/v1/bootcamps
//@access   Public
exports.createBootcamp =async(req,res,next) => {
    console.log(req.body);
    try {
        const bootcamp =await Bootcamp.create(req.body);
        res.status(201).json({
            success:true,
            data:bootcamp,
            msg:'add bootcamp'});
    } catch (error) {
        res.status(400).json({success:false});
    }
  
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
