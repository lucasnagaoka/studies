/*

o "_" como prefixo dos atributos é uma gambiarra do JavaScript pra "encapsular", servindo mais como um aviso ao programador dizendo que a propriedade não deve ser acessada ou alterada fora da classe. Para acessar esses atributos, se usa Getters.

 */

class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //garante que a instância da classe não poderá ser alterada, mesmo se o valor for atribuído nas variáveis com o prefixo "_".
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor
    }
}