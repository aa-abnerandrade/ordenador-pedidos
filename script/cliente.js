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
        console.log(novoPedido);
        //let pedido = new Pedido(novoPedido.numero, novoPedido.data, novoPedido.foto, novoPedido.produto, novoPedido.valor);
        //this.pedidos.push(pedido);
    }

    listarPedidos() {
        console.log("Pedidos do Cliente")
        this.pedidos.forEach((cadaPedido)=> {
            console.log(cadaPedido)
        })
    }

    ordernarPedido() {
        console.log("");
    }

}