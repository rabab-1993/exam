const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require('morgan')

require("./db/index");

const app = express();

app.use(express.json());
const todoRouter = require("./routers/routes/todos");

app.use(cors);
app.use(morgan("dev"));
app.use(todoRouter);

dotenv.config();
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});

