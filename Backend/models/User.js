const { sequelize, DataTypes } = require('sequelize');
const sequelize = require('..config/mysql');

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,    

});

module.exports = User;
