import { Cliente } from './cliente.js';
import { getFileData } from './api.js';
import { exibirClienteEmHTML , exibirPedidosEmHTML } from './contentHTML.js'


export function obterCliente() {
    const cliente001 = new Cliente('João Silva', 'joao@email.com', '123.456.789-00');
    cliente001.adicionarPedido();
    cliente001.adicionarPedido();
    console.log("Página do Cliente");
    return 'https://raw.githubusercontent.com/aa-abnerandrade/zum_ordenaprecos/main/data/cliente.json';
}


export function carregarCliente(urlCliente) {
    console.log(urlCliente);
    console.log("Função Carregar Página");

    (async ()=> {
        const jDados = await getFileData(urlCliente);
        console.log(jDados);
        var objCliente = construirCliente(jDados.dados);
        var lstPedidos = construirPedidos(jDados.pedidos);

    })();
}

function construirCliente(dadosCliente) {
    console.log(dadosCliente);
    const cliente = new Cliente(dadosCliente.nome, dadosCliente.email, dadosCliente.cpf);
    exibirClienteEmHTML(cliente);
    return cliente;
}

function construirPedidos(dadosPedidos) {
    console.log(dadosPedidos)

    dadosPedidos.array.forEach(element => {
        
    });

    const [pedidos] = dadosPedidos.map( (pedidoSlot)=> pedidoSlot.pedido);
    console.log([pedidos]);
    //exibirPedidosEmHTML(pedidos);
    return pedidos;
}





function ordenarPedido() {

}
