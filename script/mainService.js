import { Cliente } from './cliente.js';
import { getFileData } from './api.js';
import { exibirClienteEmHTML , exibirPedidosEmHTML } from './contentHTML.js'
import { ordenarPadrao, ordenarPorDataDecrescente, ordenarPorDataCrescente, ordenarPorValorDecrescente, ordenarPorValorCrescente} from './arrangeOrders.js'

/**
 * Função responsável por carregar a Página e todo o seu conteúdo, encapsulando funções que geram componentes.
 * Retorna a URL do arquivo JSON que contém os dados do cliente.
 *
 * @returns {string} URL do arquivo JSON do cliente.
 * @returns {Cliente} oCliente
 */
export function obterCliente() {
    return 'https://raw.githubusercontent.com/aa-abnerandrade/zum_ordenaprecos/main/data/cliente.json';
}

export function carregarPagina(urlCliente) {
    let oc;
    oc = (async ()=> {
        const jDados = await getFileData(urlCliente);
        var objCliente = construirCliente(jDados.dados);
        var lstPedidos = construirPedidos(objCliente, jDados.pedidos);
        return objCliente;
    })();
    return oc;
}

function construirCliente(dadosCliente) {
    const cliente = new Cliente(dadosCliente.nome, dadosCliente.email, dadosCliente.cpf);
    exibirClienteEmHTML(cliente);
    return cliente;
}

function construirPedidos(objCliente, dadosPedidos) {
    dadosPedidos.forEach((pedido) => {
        objCliente.adicionarPedido(pedido);
    });
    exibirPedidosEmHTML(objCliente.pedidos)
    return objCliente.pedidos;
}

/**
 * Ordena a lista de pedidos de acordo com opção escolhida.
 * 
 * @param {string} option - A opção escolhida para ordenação da lista de pedidos.
 * @param {Pedido[]} listaPedidos - A lista de pedidos a ser ordenada.
 * @returns {void} - A função não retorna nenhum valor.
 * 
 */
export function ordenarPedidos(option, listaPedidos) {

    switch(option) {
        case "0":
            ordenarPadrao(listaPedidos);
            break;
        case "1":
            ordenarPorDataDecrescente(listaPedidos);
            break;
        case "2":
            ordenarPorDataCrescente(listaPedidos);
            break;
        case "3":
            ordenarPorValorDecrescente(listaPedidos);
            break;
        case "4":
            ordenarPorValorCrescente(listaPedidos);
            break;
        default:
            ordenarPorRelevancia(listaPedidos);
    }

}
