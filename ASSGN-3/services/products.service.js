// JavaScript source code

const products = require('../data/fakeProducts.json');
class ProductsService {
    static getProducts() {
        return products;
    }
    static getProductByID(id) {
        const product = products.find((product) => {
            return product.id === parseInt(id);
        });
        return product;
    }
    static deleteProduct(id) {
        products = products.filter((product) => product.id !== parseInt(id));
        return `Product deleted ${id}`;
    }
    static addProduct(product) {
        product.id = products.length;
        products.push(product);
    }
}

module.exports = ProductsService;
