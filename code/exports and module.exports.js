//Module.exports���������Ľӿڣ�exportsֻ����������һ���������ߡ�
//��û����ʽ�ĸ�Module.exports�����κ����Ժͷ�������ô���ģ�����exports���ø�Module.exports������
//Module.exports�Ѿ��߱�һЩ���Ժͷ�������ôexports�ռ�������Ϣ��������

/*// rocker.js
exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};
// �ȼ��ڣ�
module.exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};

// user.js
var rocker = require('./rocker.js');
rocker.name(); // 'My name is Lemmy Kilmister' */

/*//ʵ��2��
module.exports = 'ROCK IT!';
exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};

var rocker = require('./rocker.js');
rocker.name(); // TypeError: Object ROCK IT! has no method 'name' */

/*// ʵ��3��
module.exports = function(name, age) {
    this.name = name;
    this.age = age;
    this.about = function() {
        console.log(this.name +' is '+ this.age +' years old');
    };
};

var Rocker = require('./rocker.js');
var r = new Rocker('Ozzy', 62);
r.about(); // Ozzy is 62 years old */
