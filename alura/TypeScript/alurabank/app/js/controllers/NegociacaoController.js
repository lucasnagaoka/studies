System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._inputData = $("#data");
                    this._inputValor = $("#valor");
                    this._inputQuantidade = $("#quantidade");
                    this._negociacoes = new index_1.Negociacoes();
                    this.negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this.negociacoesView.update(this._negociacoes);
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_1.Negociacao(new Date(this._inputData.val().replace(/-/g, '/')), parseInt(this._inputValor.val()), parseFloat(this._inputQuantidade.val()));
                    this._negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
