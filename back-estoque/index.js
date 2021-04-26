const express = require('express');
const cors = require('cors');
const { getAllProducts } = require('./controller/productController');
const { insertProduct } = require('./controller/productController');
const { removeProduct } = require('./controller/productController');
const { updateProduct } = require('./controller/productController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', getAllProducts);
app.post('/cadastrar', insertProduct);
app.delete('/delete/:id', removeProduct);
app.put('/update/:id', updateProduct);

app.listen(PORT, () => console.log(`Listening PORT ${PORT}`));
