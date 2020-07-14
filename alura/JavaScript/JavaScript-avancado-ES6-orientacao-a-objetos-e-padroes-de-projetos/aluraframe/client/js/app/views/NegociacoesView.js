class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')" class="ordena">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')" class="ordena">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')" class="ordena">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')" class="ordena">VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
            ${model.negociacoes
                .map(
                    (n) =>
                        `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `
                )
                .join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${model.volumeTotal}</td>
            </tfoot>
        </table>
    `;
    }
}
