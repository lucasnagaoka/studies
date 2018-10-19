System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, valor, quantidade) {
                    this._data = data;
                    this._valor = valor;
                    this._quantidade = quantidade;
                }
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
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
