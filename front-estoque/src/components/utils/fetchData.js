/**
 * Salvando as informação da tabela no Back-end
 * 
 */

async function AddProduct(data) {
  // console.log('dados enviar', data);
  await fetch('http://localhost:3001/cadastrar', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}

async function DeleteProduct(id) {
  const { id_produto } = id;
  // console.log('dados enviar', id_produto);
  await fetch(`http://localhost:3001/delete/${id_produto}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
}

async function UpdateProduct(data) {
  // console.log('dados enviar', data);
  const { id_produto } = data;
  await fetch(`http://localhost:3001/update/${id_produto}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}

export { AddProduct, DeleteProduct, UpdateProduct };
