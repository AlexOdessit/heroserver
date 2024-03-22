const express = require('express');
const router = require('./routers');
const app = express();
app.use(express.json());
app.use(router);

const PORT = 5000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
