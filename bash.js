const pwd = require("./pwd")
const ls = require('./ls')
const cat = require("./cat")
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd') {
        process.stdout.write(pwd());
    };
    if(cmd === 'ls') {
        process.stdout.write(ls());
    };
    if(cmd === 'cat') {
        process.stdout.write(cat());
    }
    process.stdout.write('\nprompt > ');


});ls