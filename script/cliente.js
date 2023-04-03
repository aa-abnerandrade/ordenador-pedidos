class Cliente {
    constructor(inputNome, inputEmail, inputCPF) {
        this.nome = inputNome;
        this.email = inputEmail;
        this.cpf = inputCPF;
        this.pedidos = [];
    }

    adicionarPedido() {
        this.pedidos.push(novoPedido);
    }

    orderPedido() {
        
    }

}