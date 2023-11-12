// JavaScript source code

const express = require('express');
const UsersService = require('../services/users.service');
const ProductsService = require('../services/products.service');
const authenticator = require('../services/authentication.service');
apiRoutes = express.Router();

apiRoutes.get('/users', (req, res) => {
    res.json(UsersService.getUsers());
});

apiRoutes.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = UsersService.getUserID(id);
    res.json(user);
});

apiRoutes.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = UsersService.delete(id);
    res.json(user);
});

apiRoutes.post('/users', (req, res) => {
    const user = req.body;
    UsersService.addUser(user);
    res.json(user);
});

apiRoutes.post("/authenticate", (req, res) => {
    res.json(authenticator.authenticate(req.body.username, req.body.password));
});

// product routes

apiRoutes.get('/products', (req, res) => {
    res.json(ProductsService.getProducts());
});

apiRoutes.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = ProductsService.getProductByID(id);
    res.json(product);
});

apiRoutes.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = ProductsService.deleteProduct(id);
    res.json(product);
});

apiRoutes.post('/products', (req, res) => {
    const product = req.body;
    ProductsService.addProduct(product);
    res.json(product);
});


module.exports = apiRoutes;
