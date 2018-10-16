class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputValor = document.querySelector("#valor");
        this._inputQuantidade = document.querySelector("#quantidade");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, '/')), parseInt(this._inputValor.value), parseFloat(this._inputQuantidade.value));
        console.log(negociacao);
    }
}
