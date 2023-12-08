const express = require("express");
const pageRoutes = express.Router();
const UsersService = require("../services/users.service");
const AuthenticationService = require("../services/authentication.service");

pageRoutes.get("/", (req, res) => {
  res.render("login");
});

pageRoutes.post("/", (req, res) => {
  const authentication = AuthenticationService.authenticate(null, null);
  if (authentication.isAutheticated) res.redirect(`/list`);
  else res.redirect("/");
});

pageRoutes.get("/users", async (req, res) => {
  const users = await UsersService.findAll();

  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

  res.render("users", {
    title: "users",
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

pageRoutes.get("/users/:id", (req, res) => {
  const user = UsersService.findById(req.params.id);
  res.render("user", { user });
});

module.exports = pageRoutes;
