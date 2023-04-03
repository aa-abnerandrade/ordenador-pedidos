import { Cliente } from './cliente.js';
import { getFileData } from './api.js';
import { exibirClienteEmHTML , exibirPedidosEmHTML } from './contentHTML.js'


export function obterCliente() {
    const cliente001 = new Cliente('João Silva', 'joao@email.com', '123.456.789-00');
    cliente001.adicionarPedido();
    cliente001.adicionarPedido();
    return 'https://raw.githubusercontent.com/aa-abnerandrade/zum_ordenaprecos/main/data/cliente.json';
}


export function carregarCliente(urlCliente) {

    (async ()=> {
        const jDados = await getFileData(urlCliente);
        var objCliente = construirCliente(jDados.dados);
        var [lstPedidos] = construirPedidos(objCliente, jDados.pedidos);

    })();
}

function construirCliente(dadosCliente) {
    const cliente = new Cliente(dadosCliente.nome, dadosCliente.email, dadosCliente.cpf);
    exibirClienteEmHTML(cliente);
    return cliente;
}

function construirPedidos(objCliente, dadosPedidos) {
    console.log(objCliente);
    console.log(dadosPedidos);

    dadosPedidos.forEach((pedido) => {
        console.log(pedido);
        objCliente.adicionarPedido(pedido);
        //exibirPedidosEmHTML(pedido);
    });

    console.log(objCliente.pedidos);
    return objCliente.pedidos;
}





function ordenarPedido() {

}
