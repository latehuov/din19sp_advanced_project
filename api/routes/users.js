const basicAuth = require('express-basic-auth');
router.use(basicAuth({users: { 'admin': '1234' }}))
var express = require('express');
var router = express.Router();
var user = require('../models/user_model');

router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    user.getById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  } else {
    user.get(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows.rows);
      }
    });
  }
});

router.post('/', function (req, res, next) {
  user.add(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body); 
    }
  });
});

router.delete('/:id', function (req, res, next) {
  user.delete(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put('/:id', function (req, res, next) {
  user.update(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*router.get('/name/:value?', function (req, res, next) {
  user.searchByName(req.params.value, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows.rows);
    }
  });
});

router.get('/author/:value?', function (req, res, next) {
  user.searchByAuthor(req.params.value, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows.rows);
    }
  });
});*/

module.exports = router;

/*var express = require('express');
var router = express.Router();

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/
