export class Pedido {
    constructor(inputNumero, inputData, inputFoto, inputProduto, inputValor) {
      this.numero = inputNumero;
      this.data = new Date(inputData);
      this.foto = inputFoto;
      this.produto = inputProduto;
      this.valor = inputValor;
    }


    

  }

