const express = require("express");
const clientSessions = require("client-sessions");
const pageRoutes = require("./routes/page.routes");
const apiRoutes = require("./routes/api.routes");
const { connect, sync } = require("./db");
const app = express();
const port = 3000;

async function init() {
  await connect();
  await sync();
}
//DATABASE connection
init();

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Set the JSON middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    clientSessions({
        cookieName: "session",
        secret: "SECRETCODE",
        duration: 2 * 60 * 100000,
        activeDuration: 1000 * 60,
    })
);

app.use((req, res, next) => {
    console.log(req.session);
    next();
});

// ROUTE HANDLING
app.use(pageRoutes);
app.use("/api", apiRoutes);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
