var nome = "Iuri"; // tipo string
var pi = 3.14; // variavel tipo number

var estudando = true;  
var procrastinando = false; // variaveis booleanas para indicar se um de dois valores são verdadeiros ou falsos

var pessoa = { 
    nome: "Iuri",
    idade: 22,
    frontend: true,
}; // var "pessoa" é um obejto que armazena as 3 vairaveis e seus respectivos valores

function somar( num) {
        return num * num;
} //função é um bloco de código que executa algum calculo  ou tarefa
console.log(somar(10));

pessoa.nome;

var frutas = ["banana", "maçã", "uva", "kiwi"]; //Array de nome frutas que armazena 4 itens
frutas[2]; //utilize numeros no colchete para acessar o item, lembre-se que sempre começa na posição 0

//Método de Array: concat()

var frutas = ["banana", "maçã", "uva", "kiwi"];
var legumes =["alface", "pepino", "abobora", "cebola"]

frutas = frutas.concat(legumes);
console.log(fruta); //Será imprimido um array com os itens dos dois arrays.

var front = ["html", "css", "javascript"];
front = front.join("-");

console.log(front); // deve-se separar sempre com um traço. Junta todos os itens e retornar em uma string

var coisas = ["abacaxi", "vida", "cadeira", "gato"];
coisas.push("namorada");

console.log(coisas); // adiciona elementos no final do array.

var letras = ["a", "b", "c", "e"];
letras.pop();

console.log(letras); // remove o último item do array.

var animais = ["cachorro", "gato", "peixe", "papagaio"];
animais.shift();

console.log(animais); //remove o primeiro item do array.

var comida = ["arroz", "carne", "feijão", "salada"]
comida.reverse();

console.log(comida); // as posições dos itens do array serão invertidas

for(let i = 1; i <= 5; i ++){
    console.log(i);
}
