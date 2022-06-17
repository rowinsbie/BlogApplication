const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/api/blogs', require('./routes/Blogs'));


app.listen(port, () => console.log(`Server has started on port ${port}`));