//JSON:JavaScript�����ǣ������������ݽ�����ʽ����Douglas Crockford������
//JSON�ļ�ֵ���ö��ŷֿ�����ֵ�Կ���Ƕ�ף�������Ϊ���ӵ����ݽṹ����ֵ�Ա���λ��˫�����ڲ���Ч��{"name":"yll","age":"22"}

/*//ʹ��Node.jsͨ��JSON�������ݷ��񣬱��뽫ͷHeader����Ϊapplication/json,��ͨ��Ϊtext/plain,����Ϊapplication/text�������ı���
var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end('{"name":"yll","age":"22","home":"huozhou"}');
}).listen(3000,"127.0.0.1");
console.log("Server is running at 'http://127.0.0.1:3000'");*/

/*// ��javaScript����objת��ΪJSON�ַ���:JSON.stringify(obj)
// ��Json�ַ���ת��ΪJSON����JSON.parse(json)
var obj = {
    name:"yll",
    age :"22"
};
myJsonString = JSON.stringify(obj);//��javaScript����objת��ΪJSON�ַ���
console.log(myJsonString);//���{"name":"yll","age":"22"} �ַ���
myJsonObj = JSON.parse(myJsonString);//��Jsonת��ΪJSON����
console.log(myJsonObj.age); //���22*/

// ���õ�����API������JSON���ݽ��н���
var http = require("http");
var data = "";
var options = {
    host:"ip.taobao.com",
    path:"/service/getIpInfo.php?ip=63.223.108.42"
};
var request = http.get(options,function(res){
    res.on("data",function(chunk){
        console.log(chunk.toString())
        data += chunk.toString();
    });
    res.on("end",function(){
        ipdata = JSON.parse(data);
        console.log('the ip is come from :' + ipdata.data.country);
    });
    res.on("error",function(err){
        console.log("there was an error: " + err.message);
    })
});
