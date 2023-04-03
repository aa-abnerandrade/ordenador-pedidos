import { Cliente } from './cliente.js';
import { getFileData } from './api.js';
import { exibirClienteEmHTML , exibirPedidosEmHTML } from './contentHTML.js'
import { ordenarPadrao, ordenarPorDataDecrescente, ordenarPorDataCrescente, ordenarPorValorDecrescente, ordenarPorValorCrescente} from './arrangeOrders.js'


export function obterCliente() {
    return 'https://raw.githubusercontent.com/aa-abnerandrade/zum_ordenaprecos/main/data/cliente.json';
}

export function carregarPagina(urlCliente) {
    let oc;
    oc = (async ()=> {
        const jDados = await getFileData(urlCliente);
        var objCliente = construirCliente(jDados.dados);
        var lstPedidos = construirPedidos(objCliente, jDados.pedidos);
        console.log(objCliente);
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


export function ordenarPedidos(option, cliente) {
    console.log(option, cliente)

    switch(option) {
        case "0":
            ordenarPadrao(cliente);
            break;
        case "1":
            ordenarPorDataDecrescente(cliente);
            break;
        case "2":
            ordenarPorDataCrescente(cliente);
            break;
        case "3":
            ordenarPorValorDecrescente(cliente);
            break;
        case "4":
            ordenarPorValorCrescente(cliente);
            break;
        default:
            ordenarPorRelevancia(cliente);
    }

    
}
