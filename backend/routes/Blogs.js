const express = require('express');
const router = express.Router();

// import controller methods
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/BlogController');

// Blog Routes 

router.get('/', getBlogs)

router.post('/', createBlog)

router.put('/:id', updateBlog)

router.delete("/:id", deleteBlog)

module.exports = router;