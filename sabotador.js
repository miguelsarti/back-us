class Professor {
    constructor(nome, idade) {
        this.id = this.generateID();
        this.nome = nome;
        this.idade = idade;
    }

    generateID() {
        return Math.floor(Math.random() * 100) + 1;
    }

    Matar() {
        console.log(`Um jogar foi morto!`)
    }

    #Sabotar() {
        console.log(`O gerador foi sabotado por ${this.nome}`)
    }

    #Votar() {
        console.log(`O ${this.nome} votou!`);
    };
}