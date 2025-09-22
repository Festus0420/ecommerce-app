const { sequelize, DataTypes } = require('sequelize');
const sequelize = require('..config/mysql');

const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    confirmPassword: DataTypes.STRING

});

module.exports = User;
