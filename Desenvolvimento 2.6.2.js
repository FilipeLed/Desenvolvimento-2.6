const prompt = require("prompt-sync")();

let nota1 = NaN;
let nota2 = NaN;


while (isNaN(nota1) || nota1 > 10 || nota1 < 0){
    nota1 = parseFloat(prompt("Digite o primeiro nota?    "));
    nota1 = nota1/1;
} 
while (isNaN(nota2) || nota2 > 10 || nota2 < 0){
    nota2 = parseFloat(prompt("Digite o segundo nota?    "));
    nota2 = nota2/1;
} 

let nota3 = 21 - nota1 - nota2;
 if (nota3 > 10){
    console.log(`Você precisa de mais de 10 para passar por média`);
    console.log(`Você está automaticamente reprovado`);
 }
 else{
    console.log(`Você precisa de ${nota3} para passar por média`);
 }


