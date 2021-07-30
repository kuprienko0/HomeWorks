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

