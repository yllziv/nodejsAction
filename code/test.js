// ��д���ԣ����Դ��������޸�֮�󣬲����Ӧ�ó��������µ�bug��

// TDD�����������������ȱ�д����������ϣ��������ι����Ĳ��ԣ�Ȼ���д�����ò���ͨ���������ȶ��ԣ������ع������㼯��

/*// Assertģ�飺�ṩ��һ�������Ĳ��Կ�ܣ���������ģ����assert�����ϸĽ����������Ա��棬�����첽�����Լ�ʹ��DBB����TDD�����ԣ�����ʹ��===,������==
var assert = require("assert");
assert.equal("8",8); // ��Ĭ�ǽ�
assert.strictEqual("8",8); //�׳�����*/

/*// nodeunitģ�飺ʹ��nodeunit���е�Ԫ���ԣ���assert����������˽������ж���Ե��������첽����������mock��stub�Ĺ��ܡ���װ��npm install -g nodeunit ,���У�nodeunit app.js
exports.firstTest = function(test){//ÿ�����Զ�������exports.testName��������
    test.expect(1);//nΪ�����Ķ�����
    test.strictEqual("hello","hello");
    test.done();//����ͨ���ٲ��ԣ����֮��һ��Ҫ����test.done()��ʾ�������
};
exports.secendTest = function(test){
    test.expect(1);
    test.strictEqual("hello","there");
    test.done();
};
var fs = require("fs");
exports.asyncTest = function(test){
    fs.stat("file.txt",function(err,stats){
        test.expect(2);
        test.strictEqual(err,null);
        test.notStrictEqual(stats.size,0);
        test.done();//��������
    });
};*/

// BDD:��Ϊ�����������������ⲿ���ڿ��ǳ��򣬲�����Ӧ�ó������������Ľ���Ϊ������������Ҫ���Ӧ�ó����ڲ�ԭ���ð׻��������ڲ���ʲô��Ȼ����������ι���

/*// Vowsģ�飺������BDD������Node.jsӦ�ó��򣬽�����assertģ��֮�ϡ���װ��npm install vows --save������node app.js��������ͨ�������г�honored����
var vows = require("vows");
var assert = require("assert");
vows.describe("Compare String").addBatch({ // ���� Description���Բ��Ե�����
    "when comparing the same stirngs":{    // ������ Context���������е�������
        topic:"hello",                     // ���� Topic�����Ե�ʲô
        "they should be equal":function(topic){ //���� Vow�������ڲ����з���ʲô
            assert.strictEqual(topic,"lalala");
        }
    },
    "when conparing different stirngs":{
        topic:"hello",
        "they should not be equal":function(topic){
            assert.notStrictEqual(topic,"there");
        }
    }
}).run();*/

/*// ʹ��vows�����첽���ԣ��ص�ʱ�����this.callback�����������е�Vows�����о����ã���ʹ�ص��Ľ�����Ա����ݵ����Ժ�����
var vows   = require("vows");
var assert = require("assert");
var fs     = require("fs");
vows.describe("Async testing").addBatch({
    "When using fs.stat on a file":{
        topic:function(){
            fs.stat("file.txt",this.callback);//����Ҫ��this.callback
        },
        "it should be present": function(err,stat){
            assert.notStrictEqual(err,null);
        },
        "it should not be empry":function(err,stat){
            assert.notStrictEqual(stat.size,0)
        }
    }
}).run();*/


