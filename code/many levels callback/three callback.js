
// �ص�����⣺�����ڵ�ͣ�һ���˵�����ú�֮�󣬾�ȥһ�Ե��ţ������˿��Լ�������õ����ȵ���������֮��кţ��Ǹ������úŹ�����͡�
// �ص���������B��Ϊ�������ݸ�����A���ں���Aִ����ɺ����Bִ�У����Ժܺõ�֧�ֲ������첽���Լ�����ִ��˳��

/*
// ��ȡJSON�ļ��еı��Ⲣ��ȾWebҳ�棬����ص�
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile('./title.json', function (err, data) {
            if (err) {
                console.log('fault');
                res.end('Server Error');
            } else {
                var titles = JSON.parse(data.toString());
                fs.readFile('./template.html', function (err, data) {
                    if (err) {
                        console.log('fault');
                        res.end('Server Error');
                    } else {
                        var tempHtml = data.toString();
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.write(tempHtml.replace('%', titles.join('</li><li>')));
                        res.end();
                    }
                })
            }
        })
    }
}).listen(3000);
console.log('Server running at http://localhost:3000');*/




