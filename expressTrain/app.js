const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const user = { name: 'Shannon Sharma' };
  const funFacts = [
    'I love coding!',
    'My favorite color is teal.',
    'I am slowly learning this!!!'
  ];
  res.render('index', { user, funFacts });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
