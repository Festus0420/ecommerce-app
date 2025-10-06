//const mysql = require('mysql2');
//const connection = mysql.createConnection({
  //  host: 'localhost',
    //user: 'root',
    //password: 'your_password',  
    //database: 'ecommerce_db'
//});

//connection.connect((err) => {
  //  if (err) throw err;
    //console.log('Connected to MySQL');
//});

//module.exports = connection; //

// filepath: c:\Users\FESTUS\Desktop\ecommerce-app\Backend\config\db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://arokefestus_db_user:<db_password>@ecommerce-app.0lzfaet.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-app';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;