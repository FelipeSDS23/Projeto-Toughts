const { Sequelize } = require('sequelize')

const DB_HOST = 'localhost'
const DB_USER = 'root'
const DB_PASSWORD = 'root'
const DB_NAME = 'toughts2'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize