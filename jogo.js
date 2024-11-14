class Jogo {
    constructor(nome, participantes, objetivos, tempo) {
        this.id = this.generateID();
        this.nome = nome;
        this.participantes = participantes;
        this.objetivos = objetivos;
        this.tempo = tempo;
    }

    Iniciar() {
        if(pronto == true);
            console.log(`O ${this.nome} começa agora!`);
    };

    tempoVotacao() {
        if(this.votacaoTempo == 0);
            console.log(`Faltam ${this.tempo} segundos para acabar o tempo de votação!`);
    };
    
    Encerrar() {
        if(fimdejogo == true) {
            console.log(`O ${this.nome} acabou!`);
        };
    }
}