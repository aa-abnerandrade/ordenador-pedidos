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
        construirCliente(jDados.dados);
        construirPedidos(jDados.pedidos);

        
        exibirClienteEmHTML(jDados);
    })();
}

function construirCliente(dadosCliente) {
    console.log(dadosCliente);
   
    const [currentClient] = dadosCliente.map( (dataSlot) => data);
    console.log(currentClient)

}

function construirPedidos(dadosPedidos) {
    console.log(dadosPedidos)
}


function exibirClienteEmHTML(jsonDadosCliente) {
    const fieldClient = document.querySelector('.client__content');
    const fieldOrders = document.querySelector('.orders__content__list');
    
    //fieldClient.innerHTML += ``
    
    
    console.log('Converter para HTML OK')
}


function ordenarPedido() {

}
