const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

const indexRouter = require('./router/indexRouter');
const gameRouter = require('./router/gameRouter');

app.use('/', indexRouter);
app.use('/api/game', gameRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
