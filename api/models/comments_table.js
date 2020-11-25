var db = require('../db');
var comments = {
    get: function (callback) {
        return db.query('select * from public.comments order by id_comments desc', callback);
    },
    getById: function (id, callback) {
        return db.query('select * from public.comments where id_restaurant=$1', [id], callback);
    },
    add: function (name_res, callback) {
        console.log(name_res);
        return db.query(
            'insert into public.comments(id_restaurant, parent, children, comment) values($1,$2,$3,$4)',
            [comments.id_restaurant, comments.parent, comments.children, comments.comment],
            callback
        );
    },
    /*delete: function (id, callback) {
        return db.query('delete from restaurants where id=$1', [id], callback);
    },
    update: function (id, book, callback) {
        return db.query(
            'update restaurants set name_res=$1, address=$2, time_open=$3 where id=$4',
            [book.bookname, book.author, book.isbn, id],
            callback
        );
    },
    searchByName: function (value, callback) {
        var nameLike = "%" + value + "%";
        return db.query('select * from restaurants where bookname ILIKE $1 order by id desc', [nameLike], callback);
    },
    searchByAuthor: function (value, callback) {
        var authorLike = "%" + value + "%";
        return db.query('select * from restaurants where author ILIKE $1 order by id desc', [authorLike], callback);
    }*/
};
module.exports = comments;