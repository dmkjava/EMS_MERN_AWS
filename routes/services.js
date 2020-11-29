var express = require('express');
var router = express.Router();
var db = require(__dirname + '/../bin/db.js');

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});



/* GET users listing. */
router.get('/', function (req, res, next) {

  db.query('SELECT * from employees ', function (err, rows, fields) {
    if (!err)
      res.json({
        status: 'success',
        data: rows
      })
    else
      res.json([{
        status: 'failed',
        errMsg: 'Error while performing query.'
      }])
  });

});

/* GET users by id. */
router.get('/id/:id', function (req, res, next) {
  console.log("from get by id");
  console.log(req.params.id);
  db.query('SELECT * from employees where id = ? ', req.params.id, function (err, rows, fields) {
    if (!err)
      res.status(200).json({
        status: 'success',
        data: rows[0]
      })
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while performing query.'
      }])
  });

});

router.post('/add', (req, res) => {
  data = req.body
  console.log("from add");
  console.log(data);
  db.query("INSERT INTO employees set ? ", data, function (err, rows) {
    if (!err) 
      res.status(200).json([{
        status: 'success',
        insertID: rows.insertId
      }])   
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while inserting data.'
      }])
  })
})

router.put('/edit', (req, res) => {
  data = req.body
  id = data.id

  delete data.id
  // console.log(id)
  db.query("UPDATE employees set ? where id= ? ", [data,id], function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while updating data.'
      }])
  })
})

router.delete('/delete', (req, res) => {
  console.log("From delete");
  // console.log(req);
  console.log(req.body)
  // res.sendStatus(200)
  db.query("DELETE FROM employees where id = ? ", req.body.id, function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while deleting data.'
      }])
  })
})


module.exports = router;
