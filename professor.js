class Professor {
    constructor(nome, idade) {
        this.id = this.generateID();
        this.nome = nome;
        this.idade = idade;
    }

    GenerateID() {
        return Math.floor(Math.random() * 100) + 1;
    }

    #falarDicas() {
        console.log(`O ${this.nome} irá dizer uma dica!`);
    }
}