const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


const connectDB = require('./server/database/connection');

const app = express();
app.use(express.json())

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 3000;


// LOG REQUEST 
app.use(morgan('tiny'));


//MONGODB CONNECTION
connectDB();


//PARSE REQUEST TO BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// SET VIEW ENGINE
app.set('view engine', 'ejs');
//app.set('views', path.resolve(__dirname. 'views/ejs'))


// LOAD ASSETS
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));


// LOAD ROUTERS
app.use('/', require('./server/routes/router'));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});