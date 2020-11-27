var express = require('express');
var router = express.Router();
var ratings = require('../models/ratings_table');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        ratings.getById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows.rows);
            }
        });
    } else {
        ratings.get(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows.rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    ratings.add(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

/*router.delete('/:id', function (req, res, next) {
    book.delete(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {
    book.update(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/name/:value?', function (req, res, next) {
    book.searchByName(req.params.value, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows.rows);
        }
    });
});

router.get('/author/:value?', function (req, res, next) {
    book.searchByAuthor(req.params.value, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows.rows);
        }
    });
});*/

module.exports = router;