class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;

  constructor() {
    this._inputData = document.querySelector("#data");
    this._inputValor = document.querySelector("#valor");
    this._inputQuantidade = document.querySelector("#quantidade");
  }

  public adiciona(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date (this._inputData.value.replace(/-/g, '/')),
      parseInt(this._inputValor.value),
      parseFloat(this._inputQuantidade.value)
    );

    console.log(negociacao);
  }
}
