require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/database');
const jwt = require('jsonwebtoken');

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
// app.use('/api/goals', require(''));
// app.use('/api/users', require(''));

connectDB();
app.use('/api/',require('./routes/user-signup-login'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening of port ${port}`)
});