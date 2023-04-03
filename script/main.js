import { obterCliente } from './mainService.js';
import { carregarCliente } from './mainService.js';


const urlCliente = obterCliente();
carregarCliente(urlCliente);





console.log("Final de Main");


