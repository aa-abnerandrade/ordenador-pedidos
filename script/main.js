// IMPORTS
import { obterCliente } from './mainService.js';
import { carregarPagina } from './mainService.js';
import { ordenarPedidos } from './mainService.js';


// COMPONENTS
var oCliente;
const bttArrange = document.getElementById('arrangeBy');


// RUN
const urlCliente = obterCliente();
/**
 * Função responsável por carregar a Página e todo o seu conteúdo, encapsulando funções que geram componentes.
 *
 * @param {String} urlCliente
 * @returns {Cliente} oCliente
 */
( async ()=> {
    oCliente = await carregarPagina(urlCliente);
})();


// OPERATORS
bttArrange.addEventListener('click', function(e) {
    e.preventDefault();
    const optArrange = bttArrange.options[bttArrange.selectedIndex].value;
    ordenarPedidos(optArrange, oCliente.pedidos);
})




