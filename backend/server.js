const express = require('express');
const connectToDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();
require('colors');

const PORT = process.env.PORT || 5000;
const app = express();

// Connected to Database
connectToDB();

//middlewares......
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes.....
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

//Listening express app........
app.listen(PORT, () => {
    console.log(`express app listening at port ${PORT}`);
});