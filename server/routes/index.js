// Documento JavaScript 
const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosCotroller');
const inicioController = require('../controllers/inicioController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');
const reservarController = require('../controllers/reservarController');

module.exports = function(){
    router.get('/', inicioController.consultasPaginaIncicio);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.consultaViajes);

    router.get('/viajes/:id', viajesController.consultaViaje);

    router.get('/viajes/reservas/:id', reservarController.consultaReservaViaje);

    router.get('/viajes/reservas', reservarController.agregarReservaViaje);

    router.get('/testimoniales', testimonialesController.consultaTestimoniales);

    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}