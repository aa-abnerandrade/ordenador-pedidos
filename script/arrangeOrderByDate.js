console.log('Ordenando Lista de Pedidos');


// Solução 1: Trabalhando com Elementos Primitivos
let listaL = [
    [1, "2019-05-20"],
    [7, "2023-03-05"],
    [5, "2022-12-12"],
    [3, "2021-07-06"],
    [2, "2020-08-09"],
    [4, "2021-12-13"],
    [0, "2023-02-01"]
];
console.log(listaL);
/**
*
* Ordena a lista de arrays pelo segundo elemento, que representa a data.
* @param {Array} listaL - Lista de arrays a ser ordenada.
* @returns {Array} - Lista de arrays ordenada pelo segundo elemento de cada array.
*/
listaL.sort((a, n) => {
    return new Date(n[1]) - new Date(a[1]);
});
console.log(listaL);


// Solução 2: Trabalhando com Objetos
let pedidosDoCliente = 
    [
        {numero: 1, data: new Date("2019-05-20")},
        {numero: 7, data: new Date("2023-03-05")},
        {numero: 5, data: new Date("2022-12-12")},
        {numero: 3, data: new Date("2021-07-06")},
        {numero: 2, data: new Date("2020-08-09")},
        {numero: 4, data: new Date("2021-12-13")},
        {numero: 0, data: new Date("2023-02-01")},
    ];
console.log(pedidosDoCliente)
/**
 * Ordena a array de objetos PedidoCliente em ordem decrescente de data.
 * @function ordenarPedidosPorData
 * @param {PedidoCliente[]} pedidos - Array de objetos que representam pedidos de um cliente.
 * @returns {PedidoCliente[]} - Array de objetos PedidoCliente ordenado por data.
 */
pedidosDoCliente.sort((a, n) => {
    return n.data.getTime() - a.data.getTime();
});
console.log(pedidosDoCliente);