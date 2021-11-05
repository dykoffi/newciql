"use strict"

const db = require("ciql-secry").db()
const { User, Ordi, File, } = require('../schema')

exports.models = { 
        User: db.define('User', User.attributes, User.options),  
        Ordi: db.define('Ordi', Ordi.attributes, Ordi.options),  
        File: db.define('File', File.attributes, File.options),  
}

exports.db = db

