/**
 * obejto columns define os cabeçalhos e proprieades
 *  da tabela MaterialTable
 */

import situacao from './situationTable';

const columns = [
  {
    title: 'Id',
    field: 'id_produto',
    // editable: false,
    cellStyle: {
      width: 1,
      maxWidth: 1,
    },
    headerStyle: {
      width: 20,
      maxWidth: 20,
    },
  },
  {
    title: 'Nome',
    field: 'nome',
  },
  {
    title: 'Decrição',
    field: 'descricao',
  },
  {
    title: 'Preço',
    field: 'preco',
  },
  {
    title: 'Quantidade',
    field: 'quantidade',
  },
  {
    title: 'Situação',
    field: 'quantidade',
    //definimos o situação da coluna quantidade
    //e adicionamos estilo css (cores)
    render: (row) => (
      <div className={situacao(row.quantidade)}>{situacao(row.quantidade)}</div>
    ),
  },
];

export default columns;
