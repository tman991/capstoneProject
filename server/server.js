const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const { createData } = require('./controller.js')

app.post('/createData', createData)

app.listen(4005, () => console.log("Server running on 4005"));
