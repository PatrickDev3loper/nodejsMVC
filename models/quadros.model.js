'use static';

const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'superquadros',
}

exports.getListFrames = (callback) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
    connection.query('SELECT * FROM quadros', function(err, rows) {
        callback(rows)
    });
    connection.end();
}

exports.getFrame = (id, callback) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
    connection.query('SELECT * FROM quadros WHERE id = ?', id, function(err, rows) {
        callback(rows)
    });
    connection.end();
}


exports.addFrame = (title, height, width, price, img, callback) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
    connection.query('INSERT INTO quadros (title, height, width, price, img) VALUES (?, ?, ?, ?, ?)', [title, height, width, price, img], function(err, rows) {
        if (rows.affectedRows == 1 && title != '') {
            callback(true)
        } else {
            callback(false)
        }
    });
    connection.end();
}

exports.editFrame = (id, title, height, width, price, img, callback) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
    connection.query('UPDATE quadros SET title = ?, height = ?, width = ?, price = ?, img = ? WHERE id = ?', [title, height, width, price, img, id], function(err, rows) {
        if (rows.affectedRows == 1 && id != '') {
            callback(true)
        } else {
            callback(false)
        }
    });
    connection.end();
}

exports.deleteFrame = (id, callback) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect();
    connection.query('DELETE FROM quadros WHERE id = ?', id, function(err, rows) {
        if (rows.affectedRows == 1) {
            callback(true)
        } else {
            callback(false)
        }
    });
    connection.end();
}