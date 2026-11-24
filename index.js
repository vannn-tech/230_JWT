require("dotenv").config();
const express = require("express");
const db = require("./models");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoutes);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.message);
  });