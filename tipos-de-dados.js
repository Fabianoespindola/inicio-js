const numerosInteiros = 23;
const numerosFracionados = 22.233;
const numerosNegativos = 2323;
console.log("numerosInteiros", numerosInteiros);
console.log("numerosFracionados", numerosFracionados);
console.log("numerosNegativos", numerosNegativos);

// prettier-ignore
const textos = 'qualquer tipo de texto aqui';
const textos2 = "outros textos aqui tambem";
const textos3 = `aqui tambem, porem pode se utilizar de quebra de linhas e variaveis.

"${textos}"`;
console.log("textos", textos);
console.log("textos2", textos2);
console.log("textos3", textos3);

const booleanoVerdadeiro = true;
const booleanoFalso = false;
const booleanoDeCondicao = numerosInteiros > numerosFracionados;
const booleanodeSomatoria = numerosInteiros > 3 && numerosInteiros < 10;
const booleanoDeouSomatoria = numerosInteiros > 30 || numerosInteiros < 25;
console.log("booleanoVerdadeiro", booleanoVerdadeiro);
console.log("booleanoFalso", booleanoFalso);
console.log("booleanoDeCondicao", booleanoDeCondicao);
console.log("booleanodeSomatoria", booleanodeSomatoria);
console.log("booleanoDeouSomatoria", booleanoDeouSomatoria);

const arrayVazio = [];
const arrayComNumeros = [12, 25, 378];
const arrayComTextos = ["a", "2", "teste"];
const arrayMisto = [1, "t", `a ${1}`, []];
console.log("arrayVazio", arrayVazio);
console.log("arrayComNumeros", arrayComNumeros);
console.log("arrayComTextos", arrayComTextos);
console.log("arrayMisto", arrayMisto);
/**
 * podemos acessar os valores das posicoes dentro de nosso array
 * atraves de um indexador númerico, que inicia em 0 "zero" e
 * vai até o limite de nosso array -1
 *
 * @example [5,6,4] // 0 até 2 sendo 0 = 5, 1 = 6 e 2 = 4
 */
// lendo o valor do primeiro indexador
console.log(arrayComNumeros[0]);
//alterando valor do primeiro indexador
arrayComNumeros[0] = 55;
//a adicionando outro indexador com valor
arrayComNumeros.push(55);
console.log(arrayComNumeros);

const objetoVazio = {};
const objetoSimples = { nome: "Felipe", idade: 26 };
const objetosComplexos = {
  nome: "Felipe",
  idade: 26,
  tecnologias: [
    { nome: "JavaScript/TipeScript", sigla: "JS/TS" },
    { nome: "Java", sigla: "Java" },
    { nome: "ReactJs", sigla: "ReactJs" },
    { nome: "ReactNative" },
  ],
};
console.log("objetoVazio", objetoVazio);
console.log("objetoSimples", objetoSimples);
console.log("objetosComplexos", objetosComplexos);

/**
 * acessamos os valores atravez de suas chavez utilizando o . "ponto"
 *
 * @example var x = { a: 1 } // x.a == 1
 * x.p = 2 // cria uma chave "p"e da o valor 2 a ela
 */


// acessando o valor da chave "nome"
console.log(objetoSimples.nome);
// editando o valor da chave "nome"
objetoSimples.nome = "Felipe Ribeiro";
console.log(objetoSimples.nome);
// criando uma chave nova
objetoSimples.apelido = "lipe";
console.log(objetoSimples);
// acessando valores de um objeto complexo
console.log(objetosComplexos.tecnologias[2].nome)
// inserindo um valor em um objeto complexo
objetosComplexos.tecnologias[3].comentario= "ótimo"
objetosComplexos.tecnologias[0].outro = { valor: 1, opcao: 'teste'}
console.log(objetosComplexos)

