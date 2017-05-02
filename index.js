const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(bodyparser.json());

const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on ' + port);
});