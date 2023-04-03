
export function exibirClienteEmHTML(objCliente) {
    const fieldClient = document.querySelector('.client__content');

    fieldClient.innerHTML = 
        `
            <pre>E-mail<br>${objCliente.email}</pre>
            <pre>Nome<br>${objCliente.nome}</pre>
            <pre>CPF<br>${objCliente.cpf}</pre>
        `
    console.log('Converter Cliente OK')
}


export function exibirPedidosEmHTML(lstPedidos) {
    const fieldOrders = document.querySelector('.orders__content__list');

    console.log(lstPedidos);
    console.log('Converter Order OK');

}