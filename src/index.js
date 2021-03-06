require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes')

app.use(express.static(__dirname+'/public'));
app.use(router)


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});