require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const cors = require('cors')
const WarriorsRouter = require('./routes/warriors-routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/warriors', WarriorsRouter);

app.listen(PORT, (err) => {
  if (err) {
      console.error(`Error: ${err.message}`);
  } else {
      console.log(`Server is running on port: ${PORT}`);
  }
});