const Bootcamp = require('../models/BootCamp');
const ErrorResponse = require('../utils/errorResponse');
//@desc     GET all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async(req,res,next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success:true,data:bootcamp});
    } catch (error) {
       next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}`,404));
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
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
              );
        }
        res.status(200).json({success:true,data:bootcamp});

    } catch (error) {
        next(error);

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
        next(error);
    }
  
};

//@desc     Update single bootcamps
//@route    PUT /api/v1/bootcamp/:id
//@access   Public
exports.updateBootcamp =async (req,res,next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body, {
            new:true,
            runValidators:true
        });

        if(!bootcamp){
            return res.status(400).json({success:false});

        }
        res.status(200).json({success:true,data:bootcamp});

    } catch (error) {
        next(error);
    }

};

//@desc     delete single bootcamp
//@route    DELETE /api/v1/bootcamp/:id
//@access   Public
exports.deleteBootcamp = async(req,res,next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp){
            return res.status(400).json({success:false});

        }
        res.status(200).json({success:true,data:{}});

    } catch (error) {
        next(error);
    }
};
