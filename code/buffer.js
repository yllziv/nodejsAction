//��Ҫ���ж����ƴ����ʾ���� ��ͨ��TCP���ӷ��ͺͽ������ݣ���ͼ�����ѹ���ļ���ȡ���������ݣ����ļ�ϵͳ��д���ݣ�������������Ķ�������������
//Bufferģ����Դ洢���������ݣ����������ļ����룬�����ԭʼBuffer����<Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 79 61 6e 67 6c 6f 6e 67 6c 6f 6e 67 2e 0a>
//���ñ��룺fs.readFile("a.txt","utf8",function(err,data){}); ����ascii,ucs3,base64,hex,utf8
var fs = require("fs");
fs.readFile("../data/a.txt",function(err,data){
    if(err){
        throw err;
    }else{
        console.log(data);
        console.log(data.toString("utf8"));
    }
});


/*// Node.js�еĻ������Ƕ�ԭʼ�ڴ�ķ��䣬�Ա���Node.js�Դ˶�д����
var buffer = new Buffer(8);//��������8���ֽڵĻ�����
//�õ�bufferΪ��<Buffer 50 59 40 01 01 00 00 00>
//��������������Ǽ�������������ԭʼ�ڴ档
console.log(buffer);
//�õ���'\u0000 \u0000\u0000\u0000\u0000\u0000\u0000'
var buffer = new Buffer([85,86]);//85���ַ�U
console.log(buffer.toString("utf8"));//�����봫�ݸ�������������ַ�UV*/

/*// д�뻺�������򻺳���׷�����ݣ����ƻ��������޸Ļ������е��ַ���
// Bufferģ��û���ṩ�޸��ַ����ķ����������޸ģ�ʹ��toString()����������������String����ִ���޸ģ����޸ĺ���ַ���д�Ỻ����
var buffer = new Buffer(8);
buffer.write("hi","utf8");//д�뻺����������̨�����1��˵���ñ���ռ��1���ֽ�
console.log(buffer.toString());
buffer.write(" buffer",2,"utf8");//�򻺳���׷������,2��ʾƫ��������0��ʼ��
console.log(buffer.toString());//����̨���hi buffer
var buffer2 = new Buffer(8);
buffer.copy(buffer2);//��buffer���Ƹ�buffer2
console.log(buffer2.toString());//����̨���hi buffer*/
