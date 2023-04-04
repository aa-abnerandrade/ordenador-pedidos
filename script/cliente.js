import { Pedido } from './Pedido.js';

export class Cliente {
    constructor(inputNome, inputEmail, inputCPF) {
        this.nome = inputNome;
        this.email = inputEmail;
        this.cpf = inputCPF;
        this.pedidos = [];
    }

    adicionarPedido(novoPedido) {
        let pedido = new Pedido(novoPedido.numero, novoPedido.data, novoPedido.photo, novoPedido.produto, novoPedido.valor);
        this.pedidos.push(pedido);
    }

    listarPedidos() {
        this.pedidos.forEach((cadaPedido)=> {
            console.log(cadaPedido)
        })
    }

}