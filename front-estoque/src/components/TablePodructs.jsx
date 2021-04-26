import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { AddProduct, DeleteProduct, UpdateProduct } from './utils/fetchData';
import columns from './utils/columnsTable';

function TableProducts() {
  //hooks controla produtos da requisação
  const [products, setProducts] = useState([]);

  //Fazendo requisção ao endpoint (back-end)
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp));
  }, []);

  return (
    <div>
      <MaterialTable
        options={{
          paging: false,
          actionsColumnIndex: -1,
          addRowPosition: 'first',
        }}
        title='Tabela Produtos'
        data={products}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updateTable = [...products, newRow];
              //Salvando dados no back
              AddProduct(newRow);
              setProducts(updateTable);
              resolve();
              // console.log('add');
            }),

          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...products];
              //Salvando dados no back
              DeleteProduct(selectedRow);
              updatedRows.splice(index, 1);
              //setTimeout ->
              //espera o tempo de renderização da tabela (delay)
              setTimeout(() => {
                setProducts(updatedRows);
                resolve();
                // console.log('delete', selectedRow);
              }, 2000);
            }),

          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              //Obten o index da linha
              const index = oldRow.tableData.id;
              //Obtendo a linha atualizada
              const updatedRows = [...products];
              updatedRows[index] = updatedRow;
              //Salvando dados no back
              UpdateProduct(updatedRow);
              //setTimeout ->
              //espera o tempo de renderização da tabela (delay)
              setTimeout(() => {
                setProducts(updatedRows);
                resolve();
                // console.log('update', updatedRow);
              }, 2000);
            }),
        }}
      />
    </div>
  );
}

export default TableProducts;
