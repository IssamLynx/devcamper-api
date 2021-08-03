const express =require('express');
const router =express.Router();



router.get('/',(req,res) => {

    res.status(200).json({success:true,msg:'Show all bootcamps'});
});


router.get('/:id',(req,res) => {

    res.status(200).json({success:true,msg:`get bootcamp ${req.params.id}`});
});

router.post('',(req,res) => {

    res.status(200).json({success:true,msg:'add bootcamp'});
});

router.delete('/:id',(req,res) => {

    res.status(200).json({success:true,msg:`delete bootcamp ${req.params.id}`});
});

router.put('/:id',(req,res) => {

    res.status(200).json({success:true,msg:`edit bootcamp ${req.params.id}`});
});


module.exports=router;