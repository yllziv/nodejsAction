// ʹ��STDIOģ�ͽ��е���

/*// console.erro()�����ṩ������ϸ��Ϣ
console.log("Debugging message");
function notDefined(){
    try{
        someFunction();//undefined
    }catch(e){
        console.error(e);
    }
}
notDefined();*/

/*// ʹ��console.time()��console.timeEnd()�������ܻ�׼����,�õ�ִ�е�ʱ��
var sum = 0;
var arr = new Array(1000000);
for(var i = 0; i < arr.length; i++){
    arr[i] = Math.random();
}
console.time("for-loop-1");
for(var i in arr){
    sum += arr[i];
}
console.timeEnd("for-loop-1");

console.time("for-loop-2");
for(var i = 0; i < arr.length; i++){//Ч�ʸ���
    sum += arr[i];
}
console.timeEnd("for-loop-2");*/

/*// �õ�Ӧ�ó�����ĳ����ĺ����򷽷������嵥��ʹ��console.trace()����
function doTask(){
    doSubTask(1000,10000);
}
function doSubTask(countX,countY){
    for(var i=0;i<countX;i++){
        for(var j=0;j<countY;j++){}
    }
    console.trace();
}
doTask();*/

// ʹ��v8���������Դ��룺��ϣ���ϵ㷢���ĵط�����debugger������ʹ��webstorm/������ϵ����

 // ͨ����node debug app.js���д��е��Թ��ܵĳ���
// ���롰cont��������һ���ϵ㣬����"repl"���Բ�ѯa,b,c��ֵ��ctrl+c�˳���REPL:Read,Evaluate,Print,Loop�����ڶϵ㴦��ϸ���ԣ�
var foo = function(){
    var a = 3, b = 5;
     //debugger;
    var bar = function(){
        var b = 7; c = 11;
        a += b + c;
         //debugger;
    }
    bar();
     //debugger;
};
foo();

// ʹ�� Node Inspector���е���
