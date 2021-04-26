const productModel = require('../model/productModel');

const getAllProducts = async (req, res) => {
  try {
    const data = await productModel.getAllProducts_Mod();
    // console.log('Dados novos', data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).res.json(error);
  }
};

const insertProduct = async (req, res) => {
  try {
    const { nome, descricao, preco, quantidade } = req.body;
    // console.log('Inserir', nome, descricao, preco, quantidade);
    const newProduct = await productModel.insertProducts_Mod(
      nome,
      descricao,
      preco,
      quantidade
    );

    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productModel.deleteProduc_Mod(id);
    return res.status(200).json({ message: 'Produto excluido com sucesso.' });
  } catch (error) {
    return res.status(400).json({ message: 'Erro ao excluir produto', error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log('id', id);

    const { nome, descricao, preco, quantidade } = req.body;
    if (quantidade < 0)
      return res
        .status(400)
        .json({ message: 'Quantidade não pode ser negativo' });
    // console.log('Update', id, nome, descricao, preco, quantidade);
    await productModel.updateProduct_Mod(
      id,
      nome,
      descricao,
      preco,
      quantidade
    );
    return res.status(200).json({ message: 'Produto atualizado com sucesso.' });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Erro ao atualizar produto', error });
  }
};

module.exports = {
  getAllProducts,
  insertProduct,
  removeProduct,
  updateProduct,
};
