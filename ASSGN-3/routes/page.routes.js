// JavaScript source code

const express = require('express');
const pageRoutes = express.Router();
const UsersService = require('../services/users.service');
const ProductsService = require('../services/products.service');
const AuthenticationService = require('../services/authentication.service');

pageRoutes.get('/', (req, res) => { res.send('Welcome to the home page'); });

pageRoutes.post('/', (req, res) => { 
    const authenticate = AuthenticationService.authentication(req.body.username, req.body.password);
    if (authenticate.isAuthenticated) res.redirect('/list');
    else res.redirect('/');
});

pageRoutes.get('/list', (req, res) => {
    const users = UsersService.getUsers();

    const itemsToDisplay = 15;
    const page = parseInt(req.query?.page) || 1;
    const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
    const end = start + itemsToDisplay;
    const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

    res.render("list", {
        title: "list",
        users: filteredUsers,
        itemsToDisplay,
        page,
        start,
        end,
    });
});


pageRoutes.get('/detail/:id', (req, res) => {
    const user = UsersService.getUserID(req.params.id);
    res.render('detail', { user });
});

// product routes
pageRoutes.get('/productlist', (req, res) => {
    // display all products in json
    const allproducts = ProductsService.getProducts();
    res.json(allproducts);
});

pageRoutes.get('/productdetail/:id', (req, res) => {
    const prodID = req.params.id;
    const product = ProductsService.getProductByID(prodID);
    res.json(product);
});


module.exports = pageRoutes;

