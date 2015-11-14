// ����ͳ�ƶ���ļ���������ͳ�ƽ������
var fs = require('fs');
var fileDir = './data/static/';
var wordStatic = {};
var tasks = [];
var completeTasks = 0;

fs.readdir(fileDir,function(err,files){
    if(err) throw err;
    for(var index in files){
        var task = (function(file){
            return function(){
                console.log("ͳ��һ���ļ�");
                fs.readFile(file,function(err,text){
                    if(err) throw err;
                    console.log("start " + new Date())
                    countWordsInText(text);
                    checkIfComplete();
                    console.log("end " + new Date())
                });
            }
        })(fileDir + '/' + files[index]);
        tasks.push(task); // �����к�������ӵ���������������
    }
    for(var task in tasks){ // ��ʼִ����������
        tasks[task]();
    }
});

function countWordsInText(text){
    var words = text
        .toString()
        .toLowerCase()
        .split(/\W+/)
        .sort();
    for (var index in words){
        var word = words[index];
        if(word){
            wordStatic[word] = (wordStatic[word]) ? wordStatic[word] + 1 : 1;
        }
    }
}

function checkIfComplete(){
    completeTasks++;
    if(completeTasks == tasks.length){
        for(var index in wordStatic){
            console.log(index + ': ' + wordStatic[index]);
        }
    }
}


/* // ����ִ�����̣������100��Ȼ��500�����1000
setTimeout(function () {
    console.log('1000ms');
}, 1000);
setTimeout(function () {
    console.log('500ms');
}, 500);
setTimeout(function () {
    console.log('100ms');
}, 100);*/
