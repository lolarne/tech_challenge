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
  const sql = "SELECT * FROM warriors";
  connection.query(sql, (err, results)=>{
    if(err){
      return res.status(500).send({errormessage: 'Cannot get the warriors name'});
    }else{
      return res.status(200).json(results);
    }
  });
});

router.post('/add', (req, res)=>{
  const sql = "INSERT INTO warriors SET ?";
  connection.query(sql, req.body, (err, results)=>{
    if(err){
      return res.status(500).send({errormessage: 'Cannot add the warrior'});
    }else{
      return res.status(200).json({id: results.insertId, ...req.body});
    }
  });
})

module.exports = router;
