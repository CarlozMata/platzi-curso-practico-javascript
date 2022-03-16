//Codigo del Cuadrado ejem
console.group("Cuadrados")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) 
{
    return lado * lado
}
//console.log("El area del cuadrado es:" + areaCuadrado + "cm2")
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulos")

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triangulo miden:" + ladoTriangulo1 
//+ "cm, " 
//+ ladoTriangulo2 
//+ "cm y " 
//+ baseTriangulo 
//+ "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del Triangulo es de: " 
//+ alturaTriangulo 
//+ "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del Triangulo es de: " 
//+ perimetroTriangulo 
//+ "cm")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//console.log("El area del Triangulo es de: " 
//+ areaTriangulo + "cm2")

console.groupEnd();

//Codigo del Circulo
console.group("Circulo")

// Radio
function radioCirculo(radio) {
    return radioCirculo;
} 
//console.log("El radio del circulo es: " 
//+ radioCirculo
//+ "cm")

// Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del Ciruclo es: " 
//+ diametroCirculo
//+ "cm")

// PI
const PI = Math.PI;
console.log("PI es: " 
+ PI)

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("La circunferencia es: " 
//+ perimetroCirculo
//+ "cm")

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El Area del circulo es: " 
//+ areaCirculo
//+ "cm2")

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Código de Triangulo Isósceles
function alturaIsosceles(base, lado){
    const paso_1 = (lado**2) - (base / 2)**2;
    const altura = Math.sqrt(paso_1);
    return altura;
}

function calcularAlturaIsosceles(){
    const input1 = document.getElementById('InputIsosceles_6')
    const input2 = document.getElementById('InputIsosceles_7')
    const input3 = document.getElementById('InputIsosceles_8')
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const base = parseFloat(value1);
    const lado1 = parseFloat(value2);
    const lado2 = parseFloat(value3);

    if (lado1 === lado2) {
        const altura = alturaIsosceles(base, lado1)
        alert(altura + ' cm')
    }else{
        alert('Los triangulos isósceles tienen dos lados iguales.')
    }
}
