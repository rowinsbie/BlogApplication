const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');

// import controller methods
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/BlogController');

// Blog Routes 

router.route('/').get(protect, getBlogs).post(protect,createBlog)
router.route('/:id').put(protect, updateBlog).delete(protect,deleteBlog);


module.exports = router;