// Definindo a classe Heroi
class Heroi {
  // Construtor para inicializar as propriedades do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar para exibir o ataque conforme o tipo do herói
  atacar() {
    let ataque;

    // Verificando o tipo do herói e definindo o ataque
    if (this.tipo === 'mago') {
      ataque = 'usou magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'usou espada';
    } else if (this.tipo === 'monge') {
      ataque = 'usou artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'usou shuriken';
    } else {
      ataque = 'usou um ataque desconhecido';
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi

// Criando heróis
const heroi1 = new Heroi('Merlin', 30, 'mago');
const heroi2 = new Heroi('Arthur', 35, 'guerreiro');
const heroi3 = new Heroi('Lee', 28, 'monge');
const heroi4 = new Heroi('Naruto', 20, 'ninja');

// Exibindo os ataques dos heróis
heroi1.atacar();  // O mago atacou usando magia
heroi2.atacar();  // O guerreiro atacou usando espada
heroi3.atacar();  // O monge atacou usando artes marciais
heroi4.atacar();  // O ninja atacou usando shuriken
