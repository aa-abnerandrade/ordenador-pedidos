import { exibirPedidosEmHTML } from './contentHTML.js';


export function ordenarPadrao(cliente) {
    // Conforme Gravado na Lista do Cliente
    let pedidos = cliente.pedidos;  
    let pedidosOrdenados = pedidos;
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorDataDecrescente(cliente) {
    // Mais recentes Primeiro
    let pedidos = cliente.pedidos;
    let pedidosOrdenados = pedidos.sort((a, b)=> b.data - a.data );
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorDataCrescente(cliente) {
    // Mais antiga Primeiro
    let pedidos = cliente.pedidos;
    let pedidosOrdenados = pedidos.sort((a, b)=> a.data - b.data);
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorValorDecrescente(cliente) {
    // Mais caro Primeiro
    let pedidos = cliente.pedidos;
    let pedidosOrdenados = pedidos.sort((a, b)=> b.valor - a.valor);
    exibirPedidosEmHTML(pedidosOrdenados);
}


export function ordenarPorValorCrescente(cliente) {
    // Mais barato Primeiro
    let pedidos = cliente.pedidos;
    let pedidosOrdenados = pedidos.sort((a, b)=> a.valor - b.valor);
    exibirPedidosEmHTML(pedidosOrdenados);
}

