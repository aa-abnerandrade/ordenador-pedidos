import { Pedido } from './Pedido.js';

export class Cliente {
    constructor(inputNome, inputEmail, inputCPF) {
        this.nome = inputNome;
        this.email = inputEmail;
        this.cpf = inputCPF;
        this.pedidos = [];
    }

    adicionarPedido(novoPedido) {
        console.log("Adicionar novo Pedido")
        let pedido = new Pedido(novoPedido.numero, novoPedido.data, novoPedido.photo, novoPedido.produto, novoPedido.valor);
        this.pedidos.push(pedido);
    }

    listarPedidos() {
        console.log("Pedidos do Cliente")
        this.pedidos.forEach((cadaPedido)=> {
            console.log(cadaPedido)
        })
    }

    ordernarPedidos() {
        this.pedidos.forEach((pedido) => {
            console.log("Pedido na Lista")
            console.log(pedido);
        });
    }

}