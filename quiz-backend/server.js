const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user.route');
const historyRoutes = require('./routes/quizHistory.route');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('DB Error:', err));

app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
