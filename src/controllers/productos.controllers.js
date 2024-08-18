import ProductService from "../services/ProductService.js"

class ProductController {
  async getProducts(req, res) {
    try {
      const products = await ProductService.findAll();
      if (products.length === 0 || !products) {
        throw ({
          statusCode: 404,
          status: 'Not Found',
          message: 'No se han encontrado productos'
        })
      }
      return res.json(products)
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        message: err.message,
        status: err.status
      })
    }
  }

  async createProduct(req, res) {
    try {
      await ProductService.create(req.body)
      return res.status(201).json({
        message: 'Producto creado'
      })
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        message: error.message,
        status: error.status
      })
    }
  }

  async updateProduct(req, res) {
    try {
      const productId = req.params.id; 
      const productData = req.body; 
      const product = await ProductService.findOne(productId);

      if (!product) {
        throw ({
          statusCode: 404,
          status: 'Not Found',
          message: 'Producto no encontrado'
        })
      }else{
        const updatedProduct = await ProductService.update(productId, productData);
        return res.json(updatedProduct);
      }
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        message: err.message,
        status: err.status
      })
  }
}

  async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductService.findOne(productId);

      if (!product) {
        throw ({
          statusCode: 404,
          status: 'Not Found',
          message: 'Producto no encontrado'
        })
      }else{
        const deletedProduct = await ProductService.delete(productId);
        return res.json(deletedProduct);
      }

    } catch (err) {
      return res.status(err.statusCode || 500).json({
        message: err.message,
        status: err.status
      })
    }
  }
  
}

export default ProductController