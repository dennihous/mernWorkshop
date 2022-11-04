// app.js

const express = require('express');
const connectDB = require('./config/db');
const bp = require('body-parser');
var cors = require('cors');

// routes
const clubs = require('./routes/api/clubs')

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// use body-parser
app.use(bp.json());
app.use(bp.urlencoded({ extended: true}));

app.get('/', (req, res) => res.send('Hello world!!!'));

// use routes
app.use('/api/clubs', clubs)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));