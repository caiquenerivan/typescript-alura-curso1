import { Negociacao } from "./negociacao.js";

export class Negociacoes{

    // Array de Negociação, pode ser declarada como Array<Negociacao> ou como está abaixo
    private negociacoes: Negociacao[]= [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    
    // Retorna um array de apenas leitura do tipo Negociação, 
    // pode ser declarada como ReadonlyArray <Negociacao> ou como está abaixo
    lista():readonly Negociacao[]{
        return this.negociacoes;
    }
}

