// IMPORTS

import { obterCliente } from './mainService.js';
import { carregarPagina } from './mainService.js';
import { ordenarPedidos } from './mainService.js';


// COMPONENTS

/**
* @type {Cliente}
*/
var oCliente;

const bttArrange = document.getElementById('arrangeBy');


// RUN

const urlCliente = obterCliente();

/**
 * Carrega a página do cliente de forma assíncrona e armazena o conteúdo na variável global oCliente.
 *
 * @async
 * @function
 * @returns {void}
 */
( async ()=> {
    oCliente = await carregarPagina(urlCliente);
})();


// OPERATORS

/**
 * Função que observa o botão de opções e sequentemente chama as funções responsáveis pela classificação da lista de pedidos.
 *
 * @param {method} click
 * 
 */
bttArrange.addEventListener('click', function(e) {
    e.preventDefault();
    const optArrange = bttArrange.options[bttArrange.selectedIndex].value;
    ordenarPedidos(optArrange, oCliente.pedidos);
})




