const express = require('express');
const router = require('./routers');
const basicErrorHandler = require('./middlewares/errors');
const app = express();
app.use(express.json());
app.use(router);
app.use(basicErrorHandler);

const PORT = 5000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
