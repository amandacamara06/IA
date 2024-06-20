const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Insira o enunciado da pergunta 1",
        alernativas: ["Alternativa 1", "Alternativa 2"],
    },

    {
        enunciado: "Insira o enunciado da pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },

    {
        enunciado: "Insira o enunciado da pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },   
];
const lapis = {
    tamanho: 20,
    tipo: 'HB',
    cor: 'Grafite',
    temBorrachaAtras: false
}
  [//abre lista de perguntas
{//abre objeto de pergunta
    enunciado: "pergunta 1",
    alternativas: [
        'Alternativa 1',
        'Alternativa 2'
    ]
}//fecha objeto de pergunta
]//fecha lista de perguntas

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();
