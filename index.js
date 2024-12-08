
// Função que calcula o saldo de vitórias e retorna o nível do jogador
function calcularNivelRankeadas(vitorias, derrotas) {

    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel;

    // Classificando o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "imortal";
    }

    // Retornando o saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Chamando a função e exibindo o resultado
let vitorias = 70; // Substitua pelo número de vitórias
let derrotas = 15; // Substitua pelo número de derrotas

let resultado = calcularNivelRankeadas(vitorias, derrotas);

// Exibindo o resultado
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);