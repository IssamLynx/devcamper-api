const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const colors=require('colors');
const fileupload =require('express-fileupload');
const errorHandler=require('./middleware/error');
const cookieParser=require('cookie-parser');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path:'./config/config.env'});

//connect to databse 
connectDB();

//Route files
const bootcamps=require('./routes/bootcamps');
const courses=require('./routes/course');
const auth=require('./routes/auth');

//Route files
const app =express();

//Body Parser
app.use(express.json());

//Cookie Parser
app.use(cookieParser());
//file uploading
app.use(fileupload());
app.use(express.static(path.join(__dirname,'public')));
//Mount routers
app.use('/api/v1/bootcamps',bootcamps);
app.use('/api/v1/courses',courses);
app.use('/api/v1/auth',auth);

app.use(errorHandler);

const PORT=process.env.PORT || 5000;
const server =app.listen(PORT,console.log(`server is running in ${process.env.NODE_ENV} mode on 
${PORT}`.yellow.bold));


// Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise) => {
    console.log(`Error', ${err.message}`.red);
    //Close Server & exit process
    server.close(() => process.exit(1));
});