export class Negociacao {
    /*
    Os atributos podem ser declarados de duas formas diferentes,
    sendo passados da forma mais tradicional ou direto pelo construtor


    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor:number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    Os getters também podem ser feitos direto pelo construtor,
    se utilizarmos antes do atributo o readonly, ele faz com que consigamos acessar
    esses atributos, mas como somente leitura

    get quantidade(): number{
        return this._quantidade;
    }


    get valor(): number{
        return this._valor;
    }


    */
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //O get do data é necessário para evitar que a data seja alterada depois de criado,
    //pois só com o readonly não funcionaria
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
