countOfBit = (number) =>{
    let num = +number;
    let count = 0;
    let bits = Math.ceil(Math.log2(num+1));
    for( let i = 0; i < bits; i++ ){
        num%2 === 1 ? count++ : count;
        num = Math.floor(num/2);
    }
    return count;
};
console.log('--------task 1--------');
console.log(countOfBit(1234));
console.log(countOfBit('1234'));


deepEqual = (val1, val2) =>{
    if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
        const arr1 = Object.entries(val1);
        let i = 0;
        do {
            if ((val1[arr1[i][0]] !== val2[arr1[i][0]]
                && typeof val1[arr1[i][0]] !== 'object'
                && typeof val2[arr1[i][0]] !== 'object'
                && val1[arr1[i][0]] !== null
                && val2[arr1[i][0]] !== null)
            ) return false;
            if (typeof val1[arr1[i][0]] === 'object' && typeof val2[arr1[i][0]] === 'object'){
               return deepEqual(val1[arr1[i][0]], val2[arr1[i][0]]);
            }
            if (i === arr1.length-1) return true;
            i++;
        } while ( i < arr1.length)
    } else return val1 === val2;
}
console.log('--------task 2--------');
console.log(deepEqual(4,4));
console.log(deepEqual({name: 'Vika', age: 21},{name: 'Vika', age: 21}));
console.log(deepEqual({name: 'Vika', age: {years: 21, month: 3}},{name: 'Vika', age: {years: 21, month: 2}}));

function chessBoard(height, width, char){
    if (arguments.length < 3) {
        return JSON.stringify(
            {
                status: 'failed',
                reason: 'Incorrect number of arguments. You have to enter 3 arguments'
            })
    };
    if (char.length > 1) {
        return JSON.stringify(
            {
                status: 'failed',
                reason: 'Incorrect arguments. Enter one symbol for this board.'
            })
    };
    if (typeof height !== 'number' || typeof width !== 'number' || typeof char !== 'string') {
        return JSON.stringify(
            {
                status: 'failed',
                reason: 'Incorrect type of arguments'
            })
    };
    if (height < 0 || width < 0){
        return JSON.stringify(
            {
                status: 'failed',
                reason: 'Incorrect value of arguments. Argument may be more than 0.'
            })
    };
    if (height === 0 || width === 0){
        return '';
    };
    let  board = '';
    for (let i=0; i < height; i++){
        board += `${ `${(i % 2) ? `${char} ` : ` ${char}` }`.repeat(width/2) }\n`;
    };
    return board;
};
console.log('--------task 3--------');
console.log(chessBoard(5, 10));
console.log(chessBoard(5, 10, '7'));


fizzbuzz = (number) =>{
    let arr = [];
    while(number !== 0){
        let i = number;
        number%3 === 0 ? i = 'Fizz' : i;
        number%5 === 0 ? i = 'Buzz' : i;
        number%3 === 0 && number%5 === 0 ? i = 'FizzBuzz' : i;
        arr.push(i);
        number--;
    }
    return arr.reverse();
};
console.log('--------task 4--------');
console.log(fizzbuzz(16));


function multiply (number) {
    let result = [];
    let fullNumber = number.toString().split("");
    for( let i = fullNumber.length; i >= 1; i--){
        let a = fullNumber.reduce((prev, next) => prev * next);
        result.push(a);
        fullNumber = a.toString().split("");
    };
    return result;
}
console.log('--------task 5--------');
console.log(multiply(277777788888899));