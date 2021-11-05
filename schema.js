const { DataTypes } = require('sequelize')
const { protectField: $ } = require('ciql-secry')

module.exports = {
    User: {
        attributes: {
            name: { type: DataTypes.STRING }
        }
    },
    Ordi: {
        attributes: {
            label: { type: DataTypes.STRING },
            level: { type: DataTypes.STRING },
        }
    },
    File: {
        attributes: {
            data: { type: DataTypes.BLOB },
            nom: { type: DataTypes.STRING },
            age: { type: DataTypes.INTEGER },
        }
    }
}