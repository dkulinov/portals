var mysql = require('mysql');

let pool = mysql.createPool({
    host: 'portals.cwy5bexfqndv.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'adminadmin',
    database: 'portals'
});

getLinks = (adminType, callback) => {
    pool.getConnection(function(err, connection) {
        if(err) {
            callback(true);
            return;
        } else {
            sql = "SELECT * FROM ";
            sql += adminType;
            connection.query(sql, function(err, result){
                connection.release();
                if(err) {
                    callback(true);
                    return;
                }
                else {
                    callback(false, result);
                }
            });
        }
    });
}
module.exports.getLinks = getLinks;
