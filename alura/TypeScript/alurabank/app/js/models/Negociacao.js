class Negociacao {
    constructor(data, valor, quantidade) {
        this._data = data;
        this._valor = valor;
        this._quantidade = quantidade;
    }
    // o código acima poderia ser escrito da seguinte forma:
    /*** constructor(private _data: Date, private _valor: number, priate _quantidade: number) {} ***/
    // ao adicionar "private" aos parämetros do constructor, o TS entende que eles são os atributos da classe e, por conta disso, não é necessário declará-los antes do constructor
    get data() {
        return this._data;
    }
    get valor() {
        return this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
