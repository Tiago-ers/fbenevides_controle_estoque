/**
 * Essa função verifica a situação
 * do protudo baseado pela suua quantidade
 * @param {*} row
 * @returns
 */

export default function situacao(row) {
  if (row >= 0 && row <= 20) {
    return 'Crítico';
  } else if (row >= 21 && row <= 50) {
    return 'Alerta';
  } else {
    return 'Ok';
  }
}
