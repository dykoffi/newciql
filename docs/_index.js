"use strict"
const generalDocs = require("./info.json")

const UserDocs = require('../api/User/docs.json') 
const ClasseDocs = require('../api/Classe/docs.json') 
const FileDocs = require('../api/File/docs.json') 

module.exports = {
    ...generalDocs,
    paths: { 
        ...UserDocs, 
        ...ClasseDocs, 
        ...FileDocs,
    }
}