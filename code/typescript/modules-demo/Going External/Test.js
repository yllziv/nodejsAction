var zip = require('./ZipCodeValidator');
var letters = require('./LettersOnlyValidator');
// 运行：File Watchers 在tsc.cmd命令上加参数--target ES5 --module commonjs； 在Languages & Frameworks:TypeScript:Command line options:添加--target ES5 --module commonjs
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new zip.ZipCodeValidator();
validators['Letters only'] = new letters.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
//# sourceMappingURL=Test.js.map