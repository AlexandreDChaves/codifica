//1. Validação de Datas
//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//formarem uma data real (meses de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > 31) return false;
    
    if ([4, 6, 9, 11].includes(mes) && dia > 30) return false;
    
    if (mes === 2) {
        const bissexto = (ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0);
        return dia <= (bissexto ? 29 : 28);
    }
    
    return true; 
}

console.log(ehDataValida(29, 2, 2020)); 
console.log(ehDataValida(31, 4, 2021)); 


//Jogo de Adivinhação
//Escreva um script que gere um número aleatório de 1 a 100 e peça ao
//usuário, para adivinhar. Use while para repetir até acertar, contando
//tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')()
function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa = null;
    let tentativas = 0;

    while (tentativa !== numeroAleatorio) {
        tentativa = Number(prompt(`Tentativa ${tentativas + 1}: Adivinhe o número entre 1 e 100:`));
        
        if (isNaN(tentativa)) {
            console.log("Por favor, digite um número válido!");
            continue;
        }

        tentativas++;

        if (tentativa < numeroAleatorio) {
            console.log("Mais alto!");
        } else if (tentativa > numeroAleatorio) {
            console.log("Mais baixo!");
        }
    }

    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
}

console.log("Iniciando o jogo de adivinhação...");
jogoAdivinhacao();


//Palavras Únicas
//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
//todas as palavras únicas e exibi-las em um array.


function extrairPalavrasUnicas(str) {
    
    const palavras = str.split(' ');
    const palavrasUnicas = [];
    
    for (let i = 0; i < palavras.length; i++) {
        const palavraAtual = palavras[i];
        let jaExiste = false;
        
        
        for (let j = 0; j < palavrasUnicas.length; j++) {
            if (palavrasUnicas[j] === palavraAtual) {
                jaExiste = true;
                break;
            }
        }
        
        
        if (!jaExiste) {
            palavrasUnicas.push(palavraAtual);
        }
    }

    return palavrasUnicas;
}


const frase = "olá olá mundo mundo";
const resultado = extrairPalavrasUnicas(frase);
console.log(resultado); 

//Fatorial Recursivo
//Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
//um Error, e n === 0 retornando 1.

function fatorial(n) {
    
    if (n < 0) {
        throw new Error("Não existe fatorial de números negativos");
    }
    
    
    if (n === 0) {
        return 1;
    }
    
    
    return n * fatorial(n - 1);
}


//Debounce
//Crie function debounce(fn, delay) que receba uma função fn e um delay
//em ms, retornando uma nova função que só executa fn se não for
//chamada novamente dentro do intervalo.


function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}


//Memoization
//Implemente function memoize(fn) que armazene em cache chamadas
//anteriores de fn (por argumentos), retornando resultados instantâneos em
//repetidas invocações.


function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        
        const key = JSON.stringify(args);
        
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}


//Mapeamento e Ordenação
//Dado um array produtos = [{ nome, preco }, ...], crie uma função que
//retorne um novo array apenas com os nomes, ordenados por preço
//crescente, usando map, sort.


const ordenarNomesPorPreco = produtos => [...produtos]
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);



//Agrupamento por Propriedade
//Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
//cada chave é um cliente e o valor é a soma de todos os seus total.

const totalPorCliente = vendas.reduce((acc, { cliente, total }) => {
    acc[cliente] = (acc[cliente] || 0) + total;
    return acc;
}, {});


//Conversão Entre Formatos
//Escreva duas funções:

//○ paresParaObjeto(pares) recebe um array de pares [ [chave,
//valor], ... ] e retorna o objeto equivalente.
//○ objetoParaPares(obj) faz o inverso, retornando um array de
//pares.


function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}


function objetoParaPares(obj) {
    return Object.entries(obj);
}