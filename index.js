const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNivelEsaldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem um saldo de ${saldo} está no nível de ${nivel}`;
}

function obterEntrada(pergunta) {
    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            resolve(resposta);
        });
    });
}

async function main() {
    let vitorias, derrotas;

    while (true) {
        vitorias = parseInt(await obterEntrada('Informe a quantidade de vitórias: '));
        derrotas = parseInt(await obterEntrada('Informe a quantidade de derrotas: '));

        if (!isNaN(vitorias) && !isNaN(derrotas)) {
            break;
        } else {
            console.log('Por favor, insira valores numéricos válidos.');
        }
    }

    const resultado = calcularNivelEsaldo(vitorias, derrotas);
    console.log(resultado);

    rl.close();
}

main();
