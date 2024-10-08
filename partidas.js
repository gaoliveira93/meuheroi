// Função para calcular o nível de um jogador baseado em vitórias
function calcularNivel(vitorias) {
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// Função para calcular o saldo de partidas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Exemplo de uso das funções
let vitorias = 55;  // Substitua pelo número de vitórias
let derrotas = 20;  // Substitua pelo número
