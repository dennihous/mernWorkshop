// app.js

const express = require('express');
const connectDB = require('./config/db');

// routes
const clubs = require('./routes/api/clubs')

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!!!'));

// use routes
app.use('/api/clubs', clubs)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));