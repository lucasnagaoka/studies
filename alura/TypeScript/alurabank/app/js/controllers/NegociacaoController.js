class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputValor = document.querySelector("#valor");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, '/')), parseInt(this._inputValor.value), parseFloat(this._inputQuantidade.value));
        this._negociacoes.getArray().forEach(negociacao => {
            console.log(negociacao);
        });
        this._negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this._negociacoes);
    }
}
