// Funções

function soma(num1, num2) {
    return num1 + num2;
}

const subtracao = function(num1, num2) {
    return num1 + num2;
}

const quadrado = (num1) => {
    return num1 * num1;
}

// Rest

const objeto = {
    id: 1,
    nome: "Lucas",
    idade: 19,
    curso: "Ciências Exatas"
}

function somaTodos(...numeros) {
    const soma = 0;

    return numeros.forEach((num) => soma += num);
}

const novoLucas = {...objeto, segundoCiclo: "Ciencias da Computação"};
console.log(novoLucas);

// Destructuring 

const { id, nome } = objeto;
console.log(nome);

const { idade, ...raimundo } = objeto;
console.log(raimundo)

// Arrays

const aleatorio = () => {
    const numAleatorio = Math.random(0, 10);

    const imprime = (numero) => {
        console.log(`O numero aletorio foi ${numero}`);
    } 

    return [numAleatorio, imprime]
}

const [numero, funcaoQueImprime] = aleatorio();
funcaoQueImprime(numero);

// Imutabilidade 

const arr = [1,2,3,4]

// Map

const novoArr = arr.map((item) => {
    return item * 2;
})

console.log(novoArr)

const arrayObjetos = [
    {
        id: 1,
        nome: "Lucas",
        cargo: "Gerente de Projetos",
        gestoes: 2
    },
    {
        id: 2,
        nome: "Cascata",
        cargo: "Diretor de Projetos",
        gestoes: 3
    },
    {
        id: 3,
        nome: "Fernando",
        cargo: "Diretor Comercial",
        gestoes: 2
    }
]

const maiusculo = arrayObjetos.map(({ id, nome, gestoes, cargo }) => {
    return { id: id, nome: nome.toUpperCase(), gestoes: gestoes, cargo: cargo, gestoesAno: `${gestoes / 2} Anos` }
})

console.log(arrayObjetos);

// Filter

const arrayNumeros = [1,5,8,-2,-4]

const arrayMaioresQueZero = arrayNumeros.filter((item) => {
    return item > 0;
})

console.log(arrayMaioresQueZero)

const melhorDept = arrayObjetos.filter((item) => {
    return item.cargo.includes("Projetos");
})

console.log(melhorDept)

// Reduce

const somaArrays = arrayNumeros.reduce((acc, item) => {
    return acc + item
}, 0)

console.log(somaArrays);

const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/pokemon/dialga").then(res => console.log(res.data)).catch(err => console.log(err))

async function getPokemonViaAPI(pokemonName) {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
        const { name, height, weight } = response.data;

        console.log(name);
    } catch(err) {
        console.log(err)
    }
}

getPokemonViaAPI("pangoro")







