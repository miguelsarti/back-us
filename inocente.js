class Sabotador {
    constructor(nome, idade) {
    this.id = this.generateID();
    this.nome = nome;
    this.idade = idade;
}

GenerateID() {
    return Math.floor(Math.random() * 100) + 1;
}

Morrer() {
    console.log(`O ${this.nome} morreu!`);
};  

RealizarTarefas() {
    console.log(`Uma tarefa foi realizada por ${this.nome}`)
}

Consertar() {
    console.log(`O gerador foi consertado pelo ${this.nome}`);
};

#Votar() {
    console.log(`O ${this.nome} votou!`);
};

}