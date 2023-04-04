import { exibirPedidosEmHTML } from './contentHTML.js';


export function ordenarPadrao(pedidosCliente) {
    // Conforme Gravado na Lista do Cliente
    let pedidos = pedidosCliente.slice();  
    let pedidosOrdenados = pedidos;
    exibirPedidosEmHTML(pedidosOrdenados);
}

/**
 * Ordena os pedidos do cliente por data de forma decrescente.
 *
 * @param {Array} pedidosCliente - Lista de objetos do tipo Pedido contendo as informações de cada pedido.
 * @return {void} - A função não retorna nenhum valor.
 *
 * @example
 *
 * ordenarPorDataDecrescente(pedidosDoCliente);
 */
export function ordenarPorDataDecrescente(pedidosCliente) {
    // Mais recentes Primeiro
    let pedidos = pedidosCliente.slice();
    let pedidosOrdenados = pedidos.sort((a, b)=> b.data - a.data );
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorDataCrescente(pedidosCliente) {
    // Mais antiga Primeiro
    let pedidos = pedidosCliente.slice();
    let pedidosOrdenados = pedidos.sort((a, b)=> a.data - b.data);
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorValorDecrescente(pedidosCliente) {
    // Mais caro Primeiro
    let pedidos = pedidosCliente.slice();
    let pedidosOrdenados = pedidos.sort((a, b)=> b.valor - a.valor);
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorValorCrescente(pedidosCliente) {
    // Mais barato Primeiro
    let pedidos = pedidosCliente.slice();
    let pedidosOrdenados = pedidos.sort((a, b)=> a.valor - b.valor);
    exibirPedidosEmHTML(pedidosOrdenados);
}

