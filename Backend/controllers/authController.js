const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  
const User = require('../models/User'); 

const register = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;
    bycrypt.hash(password, 10, async (err, hash) => {
        if (err) return res.status(500).send('Error hashing password');
        try {
            const newUser = await User.create({ fullName, email, password: hash, confirmPassword: hash});
            res.status(201).json({ message: 'User registered', userId: newUser.id });
        } catch (error) {
            res.status(500).send('Error registering user');
        };
        });
    };

    const login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) return res.status(400).send('User not found');

            const validPass = await bcrypt.compare(password, user.password);
            if (!validPass) return res.status(400).send('Invalid password');

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.header('Authorization', token).json({ message: 'Logged in', token });
        } catch (error) {
            res.status(500).send('Error logging in');
        };
    };

    module.exports = { register, login }; 