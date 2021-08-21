//## Taller #2: Porcentajes y descuentos

//Primer paso: definir las formulas
//Segundo paso: impelemantar las formulas en JavaScript
//Tercer paso: crear funciones
//Cuarto paso: integrar JS con HTML
//Quinto paso: enviar avances a Github

function calcular(){
    
    var precioOriginal;
    var descuento;
    
    precioOriginal = document.getElementById("precioInput").value;
    descuento = document.getElementById("descuentoInput").value; 
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    
    document.getElementById("precioConDescuento").innerHTML = precioConDescuento;
    
    console.log({
        precioOriginal,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento,
    })
};

