const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path:'./config/config.env'});

//connect to databse 
connectDB();

//Route files
const bootcamps=require('./routes/bootcamps');

//Route files
const app =express();

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

const PORT=process.env.PORT || 5000;
const server =app.listen(PORT,console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise) => {
    console.log(`Error', ${err.message}`);
    //Close Server & exit process
    server.close(() => process.exit(1));
});