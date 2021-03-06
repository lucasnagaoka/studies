import { Negociacao, Negociacoes } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';

export class NegociacaoController {
  private _inputData: JQuery;
  private _inputValor: JQuery;
  private _inputQuantidade: JQuery;
  private _negociacoes: Negociacoes;
  private negociacoesView: NegociacoesView;
  private _mensagemView: MensagemView;

  constructor() {
    this._inputData = $("#data");
    this._inputValor = $("#valor");
    this._inputQuantidade = $("#quantidade");
    this._negociacoes = new Negociacoes();
    this.negociacoesView = new NegociacoesView('#negociacoesView');
    this.negociacoesView.update(this._negociacoes);
    this._mensagemView = new MensagemView('#mensagemView');
  }

  public adiciona(event: Event) {
    event.preventDefault();

    let data = new Date (this._inputData.val().replace(/-/g, '/'));

    if (!this.testeDiaUtil) {
      this._mensagemView.update('Só é permitido adicionar negociações em dias úteis.');
      return
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputValor.val()),
      parseFloat(this._inputQuantidade.val())
    );

    // this._negociacoes.getArray().forEach(negociacao => {
    //   console.log(negociacao);
    // });

    this._negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this._negociacoes);

    this._mensagemView.update("Negociação adicionada com sucesso!");
  }

  private testeDiaUtil(data: Date): boolean {
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta, 
  Sabado
}
