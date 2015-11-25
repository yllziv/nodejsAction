/*删除douban_movie_score字段为NULL的记录
DELETE FROM movie WHERE douban_movie_score='NULL'
选择好电影
select * from movie where douban_movie_lookedman>100000 and cast(douban_movie_score as real)>9

删除douban_movie_name重复的列（年份是连续的两个）
delete from movie where douban_movie_id in (select douban_movie_id from movie
where douban_movie_name in
(select douban_movie_name from movie
group by douban_movie_name having count(douban_movie_name) > 1) and cast(douban_movie_year as int)%2=1)*/

var pg = require('pg');
var http = require('http');
var url = require('url');
var conString = "tcp://postgres:admin@localhost:5432/movie"; // 连接字符串="tcp:// 用户名 : 密码 @localhost:5432/ 库名";
var client = new pg.Client(conString);
var movies = null;
var individual = require('./individual');

// 连接数据库
client.connect(function (error, results) {
	if (error) {
		console.log('ClientConnectionReady Error: ' + error.message);
		client.end();
		return;
	}
	console.log('Connecting to postgres success...');
});


 var server= http.createServer(queryConnectionHandler);

function queryConnectionHandler(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8',
		'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
		'Access-Control-Allow-Headers':'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
		'Access-Control-Allow-Origin':'*'
	});
	var pathname = url.parse(req.url).pathname;
	var args = require('url').parse(req.url.toLowerCase(), true);

	if (pathname == '/random') { //
		var num = args.query.num || 0;//获得参数num
		// 查询数据库
		client.query("select * from \"movie\" where douban_movie_lookedman>100000 order by random() limit " + num, function (err, result) {
			//console.log(result.rows);
			movies = JSON.stringify(result.rows);
			res.end(movies);
		});
	}
	if (pathname == '/individuality') {
		var from = args.query.from || 0;//获得参数from
		var to = args.query.to || 0;//获得参数to
		if(req.method === 'POST') {
			var body = '';
			req.on('data', function (data) {
				body += data;
			});
			req.on('end', function () {
				//console.log("Body: " + body);
				var result = individual.getIndividualMoives(JSON.parse(body));
				//console.log(result);

				var sqlString = individual.getSql(result,0,100);
				console.log(sqlString);
				client.query(sqlString, function (err, result) {
					movies = JSON.stringify(result.rows);
					res.end(movies);
					//console.log(JSON.parse(movies));
				});
			});
		}
	}
}
server.listen(3000, '192.168.2.113'); // or listen(3000,'127.0.0.1');

console.log("Server running at http://192.168.2.113:3000/");
