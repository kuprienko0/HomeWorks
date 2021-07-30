fiveLines = (str) =>{
    if (typeof str !== 'string') return 'Incorrect type of argument';
    const line = str.trim();
    console.log(`${line}\n${line.repeat(2)}\n${line.repeat(3)}\n${line.repeat(4)}\n${line.repeat(5)}\n`);
}
console.log('--------task 1--------');
fiveLines('s');
fiveLines(2);


ascii = (str) =>{
    let total1 = str.split('');
    total1 = total1.map((e)=> e.charCodeAt(0)).join('').split('');
    let total2 = total1.map((e)=> (e === '7') ? e = '1' : e);
    const rez = total1.reduce((prev, next) => Number(prev) + Number(next)) - total2.reduce((prev, next) => Number(prev) + Number(next));
    console.log(total1);
    console.log(total2);
    console.log(rez);
}
console.log('--------task 2--------');
ascii('ABC');
ascii('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


alienLanguage = (str) =>{
    let sentence = str.toUpperCase();
    sentence = sentence.split(' ').map((e) =>{
        let reverse = e.split('').reverse().join('');
        reverse = reverse.substring(1).split('').reverse().join('') + reverse.charAt(0).toLowerCase();
        return  reverse;
    })
    console.log(sentence.join(' '));
}
console.log('--------task 3--------');
alienLanguage('My name is John');


automorphic = (num) =>{
    let last = num.toString().split('').reverse().slice(0,1);
    let pow = Math.pow(num,2);
    return pow.toString().endsWith(last);
}
console.log('--------task 4--------');
console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(10));


console.log('--------task 5--------');
Function.prototype.call = function(context, ...arguments) {
    this.apply(context, arguments);
}


var name;
var greet_abe = function() {
    name = 'Abe';
    return "Hello, " + name + '!';
};
var greet_ben = function() {
    name = 'Ben';
    return "Hello, " + name + '!';
};
console.log('--------task 8--------');
console.log(greet_abe());
console.log(greet_ben());