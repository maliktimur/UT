const mysql=require('mysql');

const connection = mysql.createConnection({
	host	: 'lightos.beget.tech'
	user	: 'lightos_timur'
	password: '3Mduhcx*'
	database: 'lightos_timur'
});

connection.connect(function(err){
	if(err) throw err;
});

module.exports = connection;