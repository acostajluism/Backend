import { Product, ProductManager } from "../Entregable 1/productos.js";

function testProductManager() {
  let productManager;

  function beforeEach() {
    productManager = new ProductManager();
  }

  function testGetProducts() {
    const result = productManager.getProducts();
    if (result.length !== 0) {
      throw new Error(`Error: getProducts debería devolver un array vacío, pero devolvió ${result}`);
    }
  }

  function testAddProduct() {
    const product = new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    productManager.addProduct(product);
    const products = productManager.getProducts();
    if (products.length !== 1) {
      throw new Error(`Error: addProduct debería agregar un producto, pero devolvió ${products.length} productos`);
    }
    if (products[0].id !== 1) {
      throw new Error(`Error: addProduct debería asignar un id único al producto, pero asignó ${products[0].id}`);
    }
    if (JSON.stringify(products[0]) !== JSON.stringify({...product, id: 1})) {
      throw new Error(`Error: addProduct debería devolver el producto agregado con el id asignado, pero devolvió ${JSON.stringify(products[0])}`);
    }
  }

  function testAddProductDuplicatedCode() {
    const product1 = new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    const product2 = new Product('producto prueba 2', 'Este es otro producto prueba', 150, 'Sin imagen', 'abc123', 10);
    productManager.addProduct(product1);
    try {
      productManager.addProduct(product2);
    } catch (error) {
      if (error.message !== 'Error: el código ya existe') {
        throw new Error(`Error: addProduct debería lanzar un error cuando el código está duplicado, pero lanzó ${error.message}`);
      }
    }
  }

  function testGetProductById() {
    const product = new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
    productManager.addProduct(product);
    const productId = product.id;
    const foundProduct = productManager.getProductById(productId);
    if (foundProduct !== product) {
      throw new Error(`Error: getProductById debería devolver el producto encontrado, pero devolvió ${foundProduct}`);
    }
    try {
      productManager.getProductById(999);
    } catch (error) {
      if (error.message !== 'Error: producto no encontrado') {
        throw new Error(`Error: getProductById debería lanzar un error cuando el producto no existe, pero lanzó ${error.message}`);
      }
    }
  }

  beforeEach();
  testGetProducts();
  beforeEach();
  testAddProduct();
  beforeEach();
  testAddProductDuplicatedCode();
  beforeEach();
  testGetProductById();
}
