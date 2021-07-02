var express = require('express');
var router = express.Router();
const { CLIENT_URL } = process.env;
const cors = require('cors');
const connection = require('../db-connection');

router.use(
  cors({
    origin: CLIENT_URL,
  })
);

router.get('/get', async (req, res)=>{
  const sql = "SELECT name FROM warriors";
  connection.query(sql, (err, results)=>{
    if(err){
      return res.status(500).send({errormessage: 'Cannot get the warriors name'});
    }else{
      return res.status(200).json(results);
    }
  });
});

module.exports = router;
