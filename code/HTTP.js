//HTTP�����˷������Ϳͻ�����ͨ�ŵ�ʱ��,��η��ͺͽ�������.
//Node.js���Դ���HTTP��������HTTP�ͻ���
//HTTPͷ���͵��Ǹ��ӵ���Ϣ,������������,������������Ӧ�������Լ�HTTP״̬��
//Ĭ�Ϸ�����:
//HTTP/1.1 200 ok   HTTP�汾��1.1,״̬��200��ʾ�ɹ���Ӧ
//Connection: keep-alive    �����ǳ־õ�,��HTTP1.1��ʼ�߱���,�úܶ�ʵʱ���ܳ�Ϊ����

/* // ����web������
var http = require('http');
http.createServer(function(req,res){//�������µ�Web����������������������Web��������ÿ�����յ�����ʱ�ᷢ��ʲô��
    res.writeHead(501,{'Content-Type':'text/plain'});//������ӦHTTPͷ
    res.writeHead(301,{'Location':'http://www.baidu.com'});//�ض��򣬷�����301��Ӧ�����Լ�λ��ͷ�����߿ͻ����ض������
    res.end("I'm writting program with Nodejs");
}).listen(3000,"127.0.0.1");//������Web�������Ķ˿ں�����
console.log("Server is running at 'http://127.0.0.1:3000'")*/

// ʹ��URLģ����Ӧ��ͬ������

/*// ·�ɣ�Ӧ�ó���Ҫ��Ӧ������
var url = require("url");
var requestURL = "http://daily.zhihu.com/story/4688312";
console.log(url.parse(requestURL).hostname);//��ȡ��������
console.log(url.parse(requestURL).port);//��ȡ�˿�
console.log(url.parse(requestURL).pathname);//��ȡ·������*/

/*// ͨ��URL����������಻ͬ���������Ӧ�ķ��������������ʹ��Express
var http = require("http");
var url = require("url");
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    if(pathname =='/'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("home page\n")
    }
    if(pathname == '/about'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("about")
    }
    if(pathname == '/yll'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("my name is yll.")
    }
    if(pathname == "/redirect"){
        res.writeHead(301,{"Location":"/"});
        res.end();
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("page not found!");
    }
}).listen(3000,"127.0.0.1");
console.log("server running at http://127.0.0.1:3000");*/

// ʹ��Node.js����HTTP�ͻ���
// HTTP�ͻ��˿��Զ��κη���������Ӧ�Ķ�����Web�������������������ˡ������ʼ��ͻ��ˡ�Web Scraper
// ��;����ط���������������ʱ�䡢��ȡ����ͨ��API��ȡ��Web���ݡ�����������Web���������߸�����Ϣ��Դ�����һ���mashup����������Web Service��API
// ͨ��ʹ��http.get()����ʵ�ֶԷ�������GET������Ҫ�ṩoptions�����������˿ڡ�·����

/*// ����һ��HTTP�ͻ��ˣ�����ȡһ��ҳ���HTTP״̬�벢�����Ӧ����
var http = require("http");
var options = {
    host:"movie.douban.com",
    port:80,
    path:"/"
};
http.get(options,function(res) {
    if (res.statusCode === 200) {
        console.log("The site is up!");
    }
    else {
        console.log("The Site is down!");
    }
}).on("error",function(e){
    console.log("error");
});*/

/* // nodejs����Ϊweb�����ṩ�ͻ��˽ӿڣ�������java�е�servlet
// .cmd�ļ��ó����Զ�ִ��: "%~dp0node.exe" "%~dp0app.js"
var HTTP  = require('http');
var queryServer = HTTP.createServer(queryConnectionHandler);
queryServer.listen(1333, function (err) {
    console.log('call service interface: http://127.0.0.1:1333/?a=3&b=8');
    if (err) throw err;
});
function queryConnectionHandler(req, res) {
    var args   = require('url').parse(req.url.toLowerCase(), true);
    var a = args.query.a;//��ò���a
    var b = args.query.b;//��ò���b
    var states = {
        error: function () {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            });
            res.end('false');
        },
        ok: function () {
            res.writeHead(200, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            });
            res.end('ok');
        },
        message: function (obj) {
            res.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(JSON.stringify(obj));
        }
    };
    // ����д����ʵ��
    states.message( /!* ���ﷵ��ֵ *!/ addTwoInt(a,b) );
}
function addTwoInt(a,b){
    a = parseInt(a);
    b = parseInt(b);
    var c = a + b;
    return c;
}*/


