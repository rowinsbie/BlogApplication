const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const { errorMiddleware } = require('./middleware/errorMiddleware');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/Blogs'));
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server has started on port ${port}`));