
export function exibirClienteEmHTML(objCliente) {
    const fieldClient = document.querySelector('.client__content');

    fieldClient.innerHTML = 
        `
            <pre>E-mail<br>${objCliente.email}</pre>
            <pre>Nome<br>${objCliente.nome}</pre>
            <pre>CPF<br>${objCliente.cpf}</pre>
        `
}


export function exibirPedidosEmHTML(lstPedidos) {
    const fieldOrders = document.querySelector('.orders__content__list');

    lstPedidos.forEach((pedido) => {
        fieldOrders.innerHTML += 
        `
            <div class="orders__item">
                <dt class="orders__item__orderHead"><h3>Pedido nº ${pedido.numero}</h3><em>feito dia ${(pedido.data).toLocaleDateString()}</em></dt>
                <dd class="orders__item__orderBody">
                    <div class="item__orderBody--photo">
                        <img src="${pedido.foto}" alt="Foto de ${pedido.produto}">
                    </div>
                    <div class="item__orderBody--description">
                        <span>Descrição</span>
                        <p>${pedido.produto}</p>
                    </div>
                    <div class="item__orderBody--price">
                        <span>Valor</span>
                        <p>${pedido.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    </div>
                </dd>
            </div>
        
        `
    });

}