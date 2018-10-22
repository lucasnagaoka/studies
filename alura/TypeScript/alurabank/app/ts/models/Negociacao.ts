export class Negociacao {
  readonly data: Date;
  readonly valor: number;
  readonly quantidade: number;

  constructor(data: Date, valor: number, quantidade: number) {
    this.data = data;
    this.valor = valor;
    this.quantidade = quantidade;
  }

  // o código acima poderia ser escrito da seguinte forma:
  /*** constructor(private _data: Date, private _valor: number, priate _quantidade: number) {} ***/
  // ao adicionar "private" aos parämetros do constructor, o TS entende que eles são os atributos da classe e, por conta disso, não é necessário declará-los antes do constructor

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
