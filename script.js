
let expressao = "";

const visor = document.getElementById("resultado");
const operacao = document.getElementById("operacao");

function adicionar(valor) {
    expressao += valor;
    visor.innerText = expressao;
    operacao.innerText = "";
}

function limpar() {
    expressao = "";
    visor.innerText = "0";
    operacao.innerText = "";
}

function apagar() {
    expressao = expressao.slice(0, -1);
    visor.innerText = expressao || "0";
}

function calcular() {
    try {
        if (!expressao) return;

        if (!/^[0-9+\-*/. ]+$/.test(expressao)) {
            throw new Error();
        }

        let resultado = Function(
            '"use strict"; return (' + expressao + ')'
        )();

        if (!Number.isFinite(resultado)) {
            throw new Error();
        }

        operacao.innerText = expressao + " =";
        expressao = String(resultado);
        visor.innerText = expressao;

    } catch {
        visor.innerText = "Erro";
        expressao = "";
    }
}

function porcentagem() {
    try {
        if (!expressao) return;

        let resultado = Function(
            '"use strict"; return (' + expressao + ')'
        )();

        expressao = String(resultado / 100);
        visor.innerText = expressao;
        operacao.innerText = "";

    } catch {
        limpar();
    }
}
