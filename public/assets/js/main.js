(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){

        //Su código de JavaScript aquí
        const btnResetear = document.querySelector("#btnResetear");
        const btnEnviar = document.querySelector("#btnEnviar");

        const pagoTarjeta = document.querySelector("#pagoTarjeta");
        const pagoEfectivo = document.querySelector("#pagoEfectivo");

        const pagarTarjeta = document.querySelector("#pagar-tarjeta");

        //pagarTarjeta.style.display = "none";

        $("#pagar-tarjeta").hide();

        btnResetear.addEventListener('click', function (){
            document.querySelector("#alertas").remove();
        });

        btnEnviar.addEventListener('click', enviarDatos);

        pagoTarjeta.addEventListener('click', mostrarPagoTarjeta);

        pagoEfectivo.addEventListener('click', ocultarPagoTarjeta)
        
        function enviarDatos(e){
            //e.preventDefault();
            console.log('Se hizo clic en el botón Enviar');
        }

        function mostrarPagoTarjeta() {
            $("#pagar-tarjeta").show();
        }

        function ocultarPagoTarjeta() {
            $("#pagar-tarjeta").hide();
        }

        console.log('Archivo main.js');
    });

})();