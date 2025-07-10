const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { username } = req.body;
    try {
        const user = await User.create({ username });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

module.exports = { createUser, getUsers };
