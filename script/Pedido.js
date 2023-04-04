/**
 * Tipo da entidade `Pedido`
 *
 * @typedef {Object} Cliente
 * @property {number} numero
 * @property {date} data
 * @property {string} foto
 * @property {number} valor
 * 
 */
export class Pedido {
    constructor(inputNumero, inputData, inputFoto, inputProduto, inputValor) {
      this.numero = inputNumero;
      this.data = new Date(Date.parse(inputData));
      this.foto = inputFoto;
      this.produto = inputProduto;
      this.valor = inputValor;
    }

  }

