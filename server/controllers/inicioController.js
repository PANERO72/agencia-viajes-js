const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasPaginaIncicio = async (req, res) => {

    const viajes = await Viaje.findAll({limit: 3});

    const testimoniales = await Testimonial.findAll({limit: 3});

    res.render('index', {headingH1: 'Próximos Viajes', clase: '', viajes: viajes, testimoniales: testimoniales});
}