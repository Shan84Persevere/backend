const express = require('express');
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`);''

const indexRouter = require("./router/index");
const todoRouter = require('./router/todo');

app.use('/', indexRouter);
app.use('/api/todo', todoRouter);