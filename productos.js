class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
  
  class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 1;
    }
  
    addProduct(product) {
      // Validar que todos los campos sean obligatorios
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('Error: todos los campos son obligatorios');
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.products.find(p => p.code === product.code)) {
        console.error('Error: el código ya existe');
        return;
      }
  
      product.id = this.productId;
      this.products.push(product);
      this.productId++;
    }
  
    getProductById(productId) {
      const product = this.products.find(p => p.id === productId);
  
      if (!product) {
        console.error('Error: producto no encontrado');
        return;
      }
  
      return product;
    }
  
    getProducts() {
      return this.products;
    }
  }
  
export { Product, ProductManager };
