const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCountry, getName, getAge, getBudget } = require('./controller')

app.get("/api/country", controller.getCountry);
app.get("/api/name", controller.getName);
app.get("/api/age", controller.getAge)
app.get("/api/budget", controller.getBudget)

app.listen(4000, () => console.log("Server running on 4000"));
