System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController, DiaDaSemana;
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
                    let data = new Date(this._inputData.val().replace(/-/g, '/'));
                    if (!this.testeDiaUtil) {
                        this._mensagemView.update('Só é permitido adicionar negociações em dias úteis.');
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputValor.val()), parseFloat(this._inputQuantidade.val()));
                    this._negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                }
                testeDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
