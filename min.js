function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Jogador(nome, idade, posicao) {
    this.posicao = posicao;
    Pessoa.call(this, nome, idade);
}

function historia(lendario, king) {
    this.lendario = lendario;
    this.king = king;
}

function cosmos(nome, tala) {
    this.nome = nome;
    this.tala = tala;
}

function Time(nome, brasileirao, copaDoBrasil, libertadores, rebaixamentos) {
    this.nome = nome;
    this.brasileirao = 'O número de títulos Brasileirões é: ' + brasileirao;
    this.copaDoBrasil = 'O número de títulos Copas do Brasil é: ' + copaDoBrasil;
    this.libertadores = 'O número de títulos Libertadores é: ' + libertadores;
    this.rebaixamentos = rebaixamentos;
}

function seFoi (nome, brasileirao, copaDoBrasil, libertadores, rebaixamentos, ola) {
    Time.call(this, nome, brasileirao, copaDoBrasil, libertadores, rebaixamentos);

    this.ola = ola;
}



const palmeiras = new Time('Palmeiras', 10, 2, 2, 2);
console.log(palmeiras);

const endrick = new Jogador('Endrick', '17 anos', 'atacante polivalente');
console.log(endrick);

const eua = new cosmos('Cosmos', 'O MELHOR jogou nesse time.');
console.log(eua);

const Ocara = new historia('Rei Pelé', 'Único time com mil gols de um único jogador o REI');
console.log(Ocara);

const santos = new seFoi('Santos', 8, 2, 3, 1, 'berço de craques')
console.log(santos);
