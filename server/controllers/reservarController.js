const Viaje = require('../models/Viajes');
//const Reserva = require('../models/Reserva');

exports.consultaReservaViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id);
    res.render('reservas', {headingH1: 'Reservar Viaje a:', viaje: viaje});
}

exports.agregarReservaViaje = async (req, res) => {
    res.render('reservas', {headingH1: 'Reservar Viaje a:'});
}