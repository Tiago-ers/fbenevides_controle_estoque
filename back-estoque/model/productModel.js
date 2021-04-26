const connection = require('./connection');

const getAllProducts_Mod = async () => {
  try {
    const db = await connection();
    const usersDB = await db.getTable('produtos').select().execute();
    const allUsers = await usersDB.fetchAll();
    return allUsers.map(([id_produto, nome, descricao, preco, quantidade]) => ({
      id_produto,
      nome,
      descricao,
      preco,
      quantidade,
    }));
  } catch (error) {
    return error;
  }
};

const insertProducts_Mod = async (nome, descricao, preco, quantidade) => {
  try {
    const db = await connection();
    const usersDB = await db
      .getTable('produtos')
      .insert('nome', 'descricao', 'preco', 'quantidade')
      .values(nome, descricao, preco, quantidade)
      .execute();
    return {
      id_produto: usersDB.getAutoIncrementValue(),
      nome,
      descricao,
      preco,
      quantidade,
    };
  } catch (error) {
    return error;
  }
};

const deleteProduc_Mod = async (id) => {
  try {
    const db = await connection();
    await db
      .getTable('produtos')
      .delete()
      .where('id_produto = :id_produto')
      .bind('id_produto', id)
      .execute();
  } catch (error) {
    return error;
  }
};

const findProduct_Mod = async (id) => {
  try {
    const db = await connection();
    const result = await db
      .getTable('produtos')
      .select()
      .where('id_produto = :id_produto')
      .bind('id_produto', id)
      .execute();

    const data = await result.fetchAll();
    return data.map(([id_produto, nome, descricao, preco, quantidade]) => ({
      id_produto,
      nome,
      descricao,
      preco,
      quantidade,
    }));
  } catch (erro) {
    return error;
  }
};

const updateProduct_Mod = async (id, nome, descricao, preco, quantidade) => {
  // console.log('mode', id, nome, descricao, preco, quantidade);
  try {
    // console.log(id, name, ingredients, instructions);
    const db = await connection();
    const update = await db
      .getTable('produtos')
      .update()
      .set('nome', nome)
      .set('descricao', descricao)
      .set('preco', preco)
      .set('quantidade', quantidade)
      .where('id_produto = :id_produto')
      .bind('id_produto', id)
      .execute();
    return update.getAffectedItemsCount();
  } catch (error) {
    return null;
  }
};

module.exports = {
  getAllProducts_Mod,
  insertProducts_Mod,
  deleteProduc_Mod,
  findProduct_Mod,
  updateProduct_Mod,
};
