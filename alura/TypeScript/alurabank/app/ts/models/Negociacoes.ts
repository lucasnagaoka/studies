import { Negociacao } from './Negociacao';

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public getArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }


}