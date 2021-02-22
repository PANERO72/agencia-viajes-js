$(function() {

    var mensajes = $('#mensajes');

    mensajes.hide();
    
    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.
    //[data-toggle="tooltip"]
    $('.ayuda-numero-tarjeta').tooltip({placement: 'top', title: '<p>Visa&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Nº:&nbsp;4716108999716531&nbsp;(16)&nbsp;&nbsp;CVV:&nbsp;257</p><p>Master Card&nbsp;-&nbsp;&nbsp;&nbsp;Nº:&nbsp;5281037048916168&nbsp;(16)&nbsp;CVV:&nbsp;043</p></p>American Express&nbsp;-&nbsp;&nbsp;&nbsp;Nº:&nbsp;342498818630298&nbsp;(15)&nbsp;CVV:&nbsp;3156</p>', html: true, sanitize: true});

    $('.ayuda-codigo-seguridad').tooltip({placement: 'top', title: '<p>Número de tres cifras:<p><img src="/assets/img/cvv_detras.jpg" />', html: true, sanitize: true});

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');

    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });

    confirmButton.click(function(e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if (!isCardValid) {
            // alert("Wrong card number");

            mensajes.show();

            mensajes.text('Número de tarjeta incorrecto');
        } else if(owner.val().length < 5)  {
            // alert("Wrong owner name");

            mensajes.show();

            mensajes.text('Escriba su Nombre');
        
        } else if (!isCvvValid) {
            // alert("Wrong CVV");
            mensajes.show();
            mensajes.text('Código de seguridad incorrecto.');
        } else {
            // Everything is correct. Add your form submission code here.
            // alert("Everything is correct");
            mensajes.show();
            mensajes.text('Datos correctos.');
        }
    });
});