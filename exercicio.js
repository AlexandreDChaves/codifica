//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const numero = 2
if(numero % 2 == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}

//Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const idade = 60

if(idade < 18) {
    console.log("Criança")
} else if(idade <= 29) {
    console.log("Adolescente")
} else if(idade <= 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const nota = 10

if(nota >= 0 && nota <= 4) {
    console.log("Reprovado")
} else if(nota >= 5 && nota <= 7) {
    console.log("Recuperação")
} else if(nota >= 8 && nota <= 10){
    console.log("Aprovado")
}


//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

let executando = true
//while(executando) {
    console.log("Menu:\n 1-Criar\n 2-Editar\n 3-Deletar\n 4-Sair\n")
    const opcao = Number(prompt("Escolha uma opção de 1-4: "))

    switch(opcao) {
        case 1:
            console.log("Criar")
            break
        case 2:
            console.log("Editar")
            break
        case 3:
            console.log("Deletar")
            break
        case 4:
            console.log("Sair")
            executando = false
            break
        default:
            console.log("Opção inválida")
    }
//}


//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const altura = 1.80
const peso = 80
const imc = peso / (altura * altura).toFixed(2)
if(imc < 18.5) {
    console.log("Baixo peso")
} else if(imc < 25) {
    console.log("Peso normal")
} else if(imc < 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}


//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const teminal = require('prompt-sync')();

let A = Number(teminal("Digite o valor de A: "));
let B = Number(teminal("Digite o valor de B: "));
let C = Number(teminal("Digite o valor de C: "));

if ((A < B + C) && (B < A + C) && (C < A + B)) {
    console.log("Todos os lados formam um triangulo");

    if (A === B && B === C) {
        console.log("Triangulo Equilatero");
    } else if (A === B || A === C || B === C) {
        console.log("Triangulo Isósceles");
    } else {
        console.log("Triangulo Escaleno");
    }
} else {
    console.log("Os lados não formam um triangulo");
}

//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

function calcularPrecoMacas(quantidade){
    const valor = quantidade < 12 ? 0.30 : 0.25
    return quantidade * valor
}
console.log(calcularPrecoMacas(10))


//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

function valores(a,b){
    if(a === b){
        console.log("Os valores não podem ser iguais")
    }else {
        const menor = Math.min(a,b)
        const maior = Math.max(a,b)
        console.log(`Valores em ordem crescente: ${menor} ${maior}`)
    }
}
valores(7,3)


//Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.

for(let x = 10; x > 0; x--) {
    console.log(x)
}


//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const n = 3
for(let x = 0; x < 10; x++){
    console.log(n)
}


//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.
const listaNumbers = []

for (let i = 0; i < 5; i++) {
    let input = prompt(`Digite o ${i + 1}º número: `)
    let number = Number(input)

    
    while (isNaN(number)) {
        console.log(`"${input}" não é um número válido. Tente novamente.`)
        input = prompt(`Digite o ${i + 1}º número: `)
        number = Number(input)
    }

    listaNumbers.push(number)
}

const soma = listaNumbers.reduce((acc, num) => acc + num, 0)
console.log(`A soma dos números é: ${soma}`)


//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

const n1 = prompt("Digite um número para iniciar a tabuada: ")
for(let i = 1; i <= 10; i++){
    console.log(`${n1} x ${i} = ${n1 * i}`)
}


//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.
let decimal = prompt("Digite um número decimal (ou 0 para sair): ");
let somaDecimal = 0;
let contador = 0;

while (decimal != 0) {
    const numero = Number(decimal);
    if (!isNaN(numero)) { // Verifica se é um número válido
        somaDecimal += numero;
        contador++;
    } else {
        console.log("Valor inválido, tente novamente.");
    }
    decimal = prompt("Digite um número decimal (ou 0 para sair): ");
}

if (contador > 0) {
    const mediaDecimal = somaDecimal / contador;
    console.log(`A média aritmética dos números é: ${mediaDecimal.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi inserido.");
}


//Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.


const numeroFatorial = parseInt(prompt("Digite um número inteiro não negativo para calcular o fatorial:"));

if (isNaN(numeroFatorial) || numeroFatorial < 0) {
    console.log("Número inválido! Por favor, insira um número inteiro não negativo.");
} else {
    let fatorial = 1;
    
    for (let i = 2; i <= numeroFatorial; i++) {
        fatorial *= i;
    }

    console.log(`${numeroFatorial}! = ${fatorial}`);
}

//Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let a = 0, b = 1;

console.log("Primeiros 10 números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(a); 

    let proximo = a + b;
    a = b;
    b = proximo;
}