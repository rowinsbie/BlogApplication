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
        user:req.body.id,
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
    
        await Blog.findOneAndUpdate({id:blogID,user:req.body.userID}, req.body, {
            new:true
        })
        res.status(200).json({
            message:"Blog has been updated"
        });
   
   
   
})

const deleteBlog = asyncHandler(async(req, res) => {
    const blogID = req.params.id;
    const isBlogExists = Blog.findById(blogID);
    if (!isBlogExists) {
        res.status(404);
        throw new Error("Blog does not exists")
    }

    await isBlogExists.remove();

    res.status(200).json({
        message: "deleted blog"
    });
});


module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}