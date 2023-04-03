export class Cliente {
    constructor(inputNome, inputEmail, inputCPF) {
        this.nome = inputNome;
        this.email = inputEmail;
        this.cpf = inputCPF;
        this.pedidos = [];
    }

    adicionarPedido(novoPedido) {
        this.pedidos.push(novoPedido);
    }

    orderPedido() {
        
    }

}