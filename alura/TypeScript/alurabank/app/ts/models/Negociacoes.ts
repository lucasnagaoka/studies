class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public getArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }


}