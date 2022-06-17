const getBlogs = (req, res) => {
    res.status(200).json({
        message: "get blogs"
    });
}

const createBlog = (req, res) => {
    res.status(200).json({
        message: "created blog"
    });
}

const updateBlog = (req, res) => {
    res.status(200).json({
        message: "updated Blog"
    });
}

const deleteBlog = (req, res) => {
    res.status(200).json({
        message: "deleted blog"
    });
}


module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}