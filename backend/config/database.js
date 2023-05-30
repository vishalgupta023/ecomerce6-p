const express = require("express");
const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect( process.env.DB_URI).then((data) => {
        console.log("database Connected Sucessfull!!", data.connection.host)
    })
}

module.exports=connectDatabase;