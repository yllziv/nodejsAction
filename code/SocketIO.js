// ��̬Web��ʷ
// 29����90������ڣ�DHTML�������˼򵥵Ķ�̬���ܣ��������û���Webҳ�潻���ķ����Լ�����������ʱ�ᷢ��ʲô��
// Ajax���û�����ˢ��ҳ����ܴӷ������������ݣ�����ӷ������ƶ����ݵ�������Ƚ����ѣ����ڲ�ͬ�����������ʽ��ͬ,ÿ��ͨ�Ŷ���Ҫ��������
// WebSocket���������Ϳͻ���֮��ʵ��˫��ʵʱͨ�ţ���Web�������������֮�䱣�����ӳ־ô򿪣���֧�������ӣ���
// Socket.IO���ṩ��������reconnection handling������heartbeat���ܣ�����ĳЩ�����������������˳���
var http = require("http");
var fs    = require("fs");
var server = http.createServer(function(req,res){
    fs.readFile("./socketTest.html",function(error,data){ // ���ÿͻ�����ҳ
        res.writeHead(200,{"Content.Type":"text/html"});
        res.end(data,"utf-8");
    })
}).listen(3000,"127.0.0.1");
console.log('server running at  http://127.0.0.1:3000');
var io = require("socket.io").listen(server);//��Socket.IO�󶨵������������������¼�
io.sockets.on("connection",function(socket){//���������¼�,ע��sockets��socket
    console.log("User connected");
    socket.emit("message",{text:"you hava receive message from server!"});//�ӷ����������ݷ��͸������ͻ���
    // socket.broadcast.emit("message",{text:"you hava receive message from server!"});//�������ӵĿͻ��˷�������

    socket.on("disconnect",function(){//�����Ͽ������¼�
        console.log("User disconnected!");
    });
    socket.on("fromClient",function(data){
        console.log(data.text);
    });
});
