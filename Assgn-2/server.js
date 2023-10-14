
const express = require("express");
const app = express();
const details = require("./details.js"); // Use the details module
app.use(express.static("Public"));

const port = 3000;
const menu = `<nav><a href="/">Home</a>&nbsp;|&nbsp;<a href="/list">List</a></div>`;

// ROUTE HANDLING
app.get("/", (req, res) => {
    res.send(`
      <html>
        <head>
          <style>
            /* Add custom CSS styles for the login form */
            body {
              background-color: #a1a1a1; /* Set your desired background color */
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }
            form {
              background-color: #d9d9d9; /* Set your desired background color */
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow */
            }
          </style>
        </head>
        <body>
          <h1>Login</h1>
          <form method="POST">
            <input type="text" name="username" placeholder="Username" /><br><br>
            <input type="password" name="password" placeholder="Password" /><br><br>
            <button type="submit">GO!</button>
          </form>
        </body>
      </html>
    `);
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
          <style>
            /* Add custom CSS styles for table borders */
            table.table {
                border: 2px solid #333;
            }

            table.table th, table.table td {
                border: 1px solid #333; 
            }
          </style>
        </head>
        <body style="background-color: #dcdcdc;">
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
    const userId = parseInt(req.params.id);
    const user = usersData.find((user) => user.id === userId);

    const userDetails = details(user, menu);

    res.send(`
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body style="background-color: #e0eeee;">
          ${userDetails}
        </body>
      </html>
    `);
});


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
