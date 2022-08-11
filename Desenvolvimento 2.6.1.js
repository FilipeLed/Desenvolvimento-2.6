const prompt = require("prompt-sync")();

let nota1 = NaN;
let nota2 = NaN;
let nota3 = NaN;

while (isNaN(nota1) || nota1 > 10 || nota1 < 0){
    nota1 = parseFloat(prompt("Digite o primeiro nota?    "));
    nota1 = nota1/1;
} 
while (isNaN(nota2) || nota2 > 10 || nota2 < 0){
    nota2 = parseFloat(prompt("Digite o segundo nota?    "));
    nota2 = nota2/1;
} 
while (isNaN(nota3) || nota3 > 10 || nota3 < 0){
    nota3 = parseFloat(prompt("Digite o terceira nota?    "));
    nota3 = nota3/1;
} 

let mediaFinal = (nota1 + nota2 + nota3)/3;

let resultado = mediaFinal >= 7?'Aprovado':'Reprovado';

console.log(`A Média Final é ${mediaFinal}!`);
console.log(`O aluno está ${resultado}!`);