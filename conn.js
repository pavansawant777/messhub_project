var mysql = require('mysql');
var util = require('util');

var conn = mysql.createConnection({
    host: 'bxvmy8bbbkdmgjagiafe-mysql.services.clever-cloud.com',
    user: 'udxjvmeehjinkm13', 
    password: 'TMfbXxgVa36alb8qVuSU',
    database: 'bxvmy8bbbkdmgjagiafe',
});

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
