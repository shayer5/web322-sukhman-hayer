
const express = require("express");
const app = express();

app.use(express.static("Public"));

const port = 3000;
const menu = `<nav><a href="/">Home</a>&nbsp;|&nbsp;<a href="/list">List</a></div>`;

// ROUTE HANDLING
app.get("/", (req, res) => {
    res.send(
        `${menu}<h1>Login</h1><form method="POST"><input type="text" name="username" /><input type="password" name="password" /><button type="submit">GO!</button></form>`
    );
});


app.post("/", (req, res) => {
    res.redirect("/list");
});
const fs = require("fs");

let usersData;

fs.readFile('./Public/fakeUsers.json', (err, data) => {
    if (err) {
        console.error('Error reading fakeUsers.json:', err);
    } else {
        usersData = JSON.parse(data);
    }
});


app.get("/list", (req, res) => {

    const userListHtml = usersData.map((user) => {
        return `<li><a href="/detail/${user.id}">${user.firstName} ${user.lastName}</a></li>`;
    });

    res.send(`
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
          ${menu}
          <h1>List</h1>
          <table id="userTable" class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <script src="/list.js"></script>
        </body>
      </html>
    `);
});

app.get("/detail/:id", (req, res) => {
    const id = req.params.id;
    const user = usersData.find((user) => {
        return user.id == id;
    });

    res.send(`${menu}<h1>Detail<h1>
    <div>${id} ${user.firstName}</div>`);
});


//there is also app.delte app.post app.put

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
