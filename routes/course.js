
const express = require('express');
const {
  getCourses,
} = require('../controllers/course');
const Course = require('../models/Course');
const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(getCourses);

  module.exports = router;
