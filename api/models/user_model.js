var db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var users = {
    get: function (callback) {
        return db.query('select * from public.users order by id desc', callback);
    },
    getById: function (id, callback) {
        return db.query('select * from public.users where id=$1', [id], callback);
    },
    add: function (users, callback) {
        bcrypt.hash(user.password, saltRounds, function (err, hash) {
            console.log(users);
            return db.query(
                'insert into public.users (u_name, password) values($1,$2)',
                [users.u_name, hash],
                callback
            )
        }
        );
    },
    /*delete: function(id, callback) {
      return db.query('delete from book_table where id=$1', [id], callback);
    },*/
    update: function (id, users, callback) {
        bcrypt.hash(users.password, saltRounds, function (err, hash) {
            return db.query(
                'update public.users set u_name=$1, password=$2, where id=$3',
                [users.u_name, hash, id],
                callback
            )
        }
        );
    },
    /*searchByName:function(value,callback) {
      var nameLike="%"+value+"%";
      return db.query('select * from book_table where bookname ILIKE $1 order by id desc',[nameLike], callback);
    },
    searchByAuthor:function(value,callback) {
      var authorLike="%"+value+"%";
      return db.query('select * from book_table where author ILIKE $1 order by id desc',[authorLike], callback);
    }*/
};
module.exports = users;