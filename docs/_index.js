"use strict"

const generalDocs = require("./info.json")

const UserDocs = require('../api/User/docs.json') 
const OrdiDocs = require('../api/Ordi/docs.json') 
const FileDocs = require('../api/File/docs.json') 

module.exports = {
    ...generalDocs,
    paths: { 
        ...UserDocs, 
        ...OrdiDocs, 
        ...FileDocs,
    }
}