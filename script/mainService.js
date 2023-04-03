import { Cliente } from './cliente.js';
import { getFileData } from './api.js';


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
    return cliente;
}

function construirPedidos(dadosPedidos) {
    console.log(dadosPedidos)
    const [pedidos] = dadosPedidos.map( (pedidoSlot)=> pedido);
    console.log([pedidos]);
}


function exibirClienteEmHTML(jsonDadosCliente) {
    const fieldClient = document.querySelector('.client__content');
    const fieldOrders = document.querySelector('.orders__content__list');
    
    //fieldClient.innerHTML += ``
    
    
    console.log('Converter para HTML OK')
}


function ordenarPedido() {

}
