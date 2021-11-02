const db = require("ciql-secry").db()
const { User, Classe, File, } = require('../schema')

exports.models = { 
        User: db.define('User', User.attributes, User.options),  
        Classe: db.define('Classe', Classe.attributes, Classe.options),  
        File: db.define('File', File.attributes, File.options),  
}

exports.db = db

