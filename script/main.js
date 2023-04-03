// IMPORTS
import { obterCliente } from './mainService.js';
import { carregarPagina } from './mainService.js';
import { ordenarPedidos } from './mainService.js';


// COMPONENTS
var oCliente;
const bttArrange = document.getElementById('arrangeBy');


// RUN
const urlCliente = obterCliente();
( async ()=> {
    oCliente = await carregarPagina(urlCliente);
    console.log(oCliente)
})();


// OPERATORS
bttArrange.addEventListener('click', function(e) {
    e.preventDefault();
    const optArrange = bttArrange.options[bttArrange.selectedIndex].value;
    console.log(optArrange)
    ordenarPedidos(optArrange, oCliente);
})




