const Sequelize = require("sequelize");

const PGHOST = "ep-lingering-sound-37866534.us-east-2.aws.neon.tech";
const PGDATABASE = "WEB";
const PGUSER = "shayer5";
const PGPASSWORD = "WAlFybt7Cid1";

// set up sequelize to point to our postgres database
let sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});

const User = sequelize.define("users", {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  lastName: Sequelize.TEXT,
  email: Sequelize.TEXT,
  password: Sequelize.TEXT,
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
}

async function sync() {
  await sequelize.sync({ alter: true });
}

module.exports = {
  connect,
  sync,
  models: {
    User,
  },
};
