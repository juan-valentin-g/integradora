const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/integradoraB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9'

module.exports = () => {
    const connect = () => {
        mongoose.connect(DB_URL)
        .then(() =>{
            console.log('La conexion fue exitosa!');
        })
        .catch((err) => {
            console.error('Error al conectar la base de datos ', err);
        });
    }

    connect();
}