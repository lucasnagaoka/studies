System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, valor, quantidade) {
                    this.data = data;
                    this.valor = valor;
                    this.quantidade = quantidade;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
