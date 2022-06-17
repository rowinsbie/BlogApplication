const asyncHandler = require('express-async-handler');
const Blog = require('../model/BlogModel');
const getBlogs = asyncHandler(async(req, res) => {
    const Blogs = await Blog.find();
    res.status(200).json({
        message: "get blogs",
        blogs: Blogs
    });
})

const createBlog = asyncHandler(async(req, res) => {
    if (!req.body.title) {
        res.status(400);
        throw new Error("Please enter your title")
    }

    if (!req.body.content) {
        res.status(400);
        throw new Error("Please enter your content")
    }

    const NewBlog = await Blog.create({
        title: req.body.title,
        content: req.body.content
    });

    res.status(200).json({
        message: "created blog",
        goal: NewBlog
    });
})

const updateBlog = asyncHandler(async(req, res) => {
    const blogID = req.params.id;
    const blog = await Blog.findById(blogID)
    if (!blog) {
        res.status(404);
        throw new Error("Blog not found")
    }
    const updateBlog = await Blog.findOneAndUpdate(blogID, req.body, {
        new: true
    })
    res.status(200).json({
        message: "updated Blog",
        blog: updateBlog
    });
})

const deleteBlog = asyncHandler(async(req, res) => {
    const blogID = req.params.id;
    const isBlogExists = Blog.findById(blogID);
    if (!isBlogExists) {
        res.status(404);
        throw new Error("Blog does not exists")
    }

    const deleteBlog = await Blog.findByIdAndDelete(blogID);

    res.status(200).json({
        message: "deleted blog",
        deletedBlog: deleteBlog
    });
});


module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}