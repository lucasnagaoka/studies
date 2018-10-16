class Negociacao {
  private _data: Date;
  private _valor: number;
  private _quantidade: number;

  constructor(data: Date, valor: number, quantidade: number) {
    this._data = data;
    this._valor = valor;
    this._quantidade = quantidade;
  }

  // o código acima poderia ser escrito da seguinte forma:
  /*** constructor(private _data: Date, private _valor: number, priate _quantidade: number) {} ***/
  // ao adicionar "private" aos parämetros do constructor, o TS entende que eles são os atributos da classe e, por conta disso, não é necessário declará-los antes do constructor

  get data(): Date {
    return this._data;
  }

  get valor(): number {
    return this._valor;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}
