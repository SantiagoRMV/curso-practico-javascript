//código cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado mide " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado mide " + areaCuadrado + " cm2");

console.groupEnd();

//código triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(altura, base){
    return (base * altura) / 2;
}

//const ladoTriangulo1 = 6;

//const ladoTriangulo2 = 6;

//const baseTriangulo = 4;

//const alturaTriangulo = 5.5;

//console.log(
    //"Los lados del triangulo miden " 
    //+ ladoTriangulo1 
    //+ " cm, " 
    //+ ladoTriangulo2 
    //+ " cm, " 
    //+ baseTriangulo 
    //+ " cm"
//);

//console.log("La altura del triangulo es de " + alturaTriangulo + " cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es de " + perimetroCuadrado + " cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El área del triangulo es de " + areaTriangulo + " cm2");

//console.groupEnd();

//código del circulo
console.group("Circulo");

function perimetroCirculo(radio){
    return (radio * 2) * Math.PI;
}

function areaCirculo(radio){
    return(radio * radio) * Math.PI;
}

//const radioCirculo = 4;
//console.log("El radio del circulo es de " + radioCirculo + " cm");

//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es de " + diametroCirculo + " cm");

//const PI = Math.PI;
//console.log("PI tiene el valor de " + PI);

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es de " + perimetroCirculo + " cm");

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del circulo es de " + areaCirculo + " cm2");


console.groupEnd();