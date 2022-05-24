export class Negociacoes {
    constructor() {
        // Array de Negociação, pode ser declarada como Array<Negociacao> ou como está abaixo
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Retorna um array de apenas leitura do tipo Negociação, 
    // pode ser declarada como ReadonlyArray <Negociacao> ou como está abaixo
    lista() {
        return this.negociacoes;
    }
}
