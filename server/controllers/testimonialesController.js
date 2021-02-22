const Testimonial = require('../models/Testimoniales');

exports.consultaTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll();
    
    res.render('testimoniales', {headingH1: 'Testiomniales', testimoniales: testimoniales});
}

exports.agregarTestimonial = async (req, res) => {
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    let exito;

    if (!nombre) {
        errores.push({'mensaje': 'Todos los campos son obligatorios.'});
    } else if (!correo){
        errores.push({'mensaje': 'Todos los campos son obligatorios.'});
    } else if (!mensaje){
        errores.push({'mensaje': 'Todos los campos son obligatorios.'});
    } else {
        exito;
    }

    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {nombre, correo, mensaje, errores, testimoniales, headingH1: 'Testimoniales'});
    } else {
        const testimonial = await Testimonial.create({nombre, correo, mensaje});
        
        res.redirect('/testimoniales').catch(error => {
            console.log(error);
        });
        
        res.render('testimoniales', {exito, testimonial, headingH1: 'Testimoniales'});
    }
}