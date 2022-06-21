const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/db');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/Blogs'));
app.use('/api/user', require('./routes/User'));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server has started on port ${port}`));