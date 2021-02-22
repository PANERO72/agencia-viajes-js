const Sequelize = require('sequelize');

const db = require('../config/database');

const Reserva = db.define('reservas', {
    id_viaje: {
        type: Sequelize.INTEGER
    },
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    forma_pago: {
        type: Sequelize.STRING
    },
    observaciones: {
        type: Sequelize.STRING
    }
});

module.exports = Reserva;