var precioOriginal;
var descuento;

function calcular(){
    
    const precioOriginal = document.getElementById("precioInput").value;
    const descuento = document.getElementById("descuentoInput").value; 
    const cupon = document.getElementById("cuponInput").value;
    
    console.log(cupon);

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    
    switch(cupon){
        case "N/A":
            document.getElementById("precioConDescuento").innerHTML = precioConDescuento;
            break;
        case "25%":
            calcularCupon(25);
            break;
        case "50%":
            calcularCupon(50);
            break;
        case "75%":
            calcularCupon(75);
            break; 
    }

    function calcularCupon(cupon){
        const porcentajePrecioConCupon = 100 - cupon;
        const precioConCupon = (precioOriginal * porcentajePrecioConCupon) / 100;
        document.getElementById("precioConDescuento").innerHTML = precioConCupon;
    }
};