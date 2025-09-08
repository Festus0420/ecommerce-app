const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middleware/authenticate');

application.use(express.json());
application.use('/api/auth', authRoutes);

application.get('/api/profile', authenticate, (req, res) => {
    res.send(`Welcome ${req.user.name}`);
});

module.exports = application;