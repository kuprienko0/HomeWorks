//task1 -----------------------------------------------------------------------------------------
class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status){
        super(name, age, 0, "shark", status);
    }
}

const shark = new Shark("Malyshka", 2, "status1");

class Cat extends Animal {
    constructor(name, age, status){
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

const cat = new Cat("Shanty", 1, "status2");

class Dog extends Animal {
    constructor(name, age, status, owner){
        super(name, age, 4, "dog", status);
        this.owner = owner;
    }

    greetMaster() {
        return `Hello ${this.owner}`;
    }
}
const dog = new Dog("Pushok", 6, "status3", "John");


//task2 -----------------------------------------------------------------------------------------
// class sortedList {
//     constructor(arrForSort) {
//         this.arrOfNumbers = arrForSort ? this.sortArray(arrForSort) : [];
//         this.length = this.arrOfNumbers.length;
//     }
//
//     sortArray(arrForSort) {
//         if(arrForSort){
//             arrForSort.sort((first, second) => first - second)
//         } else this.arrOfNumbers.sort((first, second) => first - second);
//     }
//
//     add(newNumber) {
//         this.arrOfNumbers.push(newNumber);
//         this.getSortedArray();
//         this.length++;
//     }
//
//     get(i) {
//         if (i < this.length){
//             return this.arrOfNumbers[i - 1];
//         } else return console.error('incorrect index of element')
//
//     }
// }
//
// const arr = new sortedList([10, 50, 75, 2, 23]);
// arr.add(33);
// console.log(arr);
// console.log(arr.get(1));
// console.log(length);


//task3 -----------------------------------------------------------------------------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.info = `${this.name}s age is ${this.age}`;
    }

    getInfo() {
        return `${this.name}'s age is ${this.age}`;
    }
}


//task5 -----------------------------------------------------------------------------------------
function menStillStanding(cards) {
    const A = new Array(11).fill(2);
    const B = new Array(11).fill(2);
    let isLose = false;
    const check = function(arr){
        return  arr.filter((playerHp) => playerHp > 0).length >= 7
    }
    cards.forEach((card) => {
        if (check(A) && check(B)) {
            if (card[0] = "A"){
                if (card[card.length-1] == 'Y') {
                    A[card.match(/\d+/)[0]-1] -= 1
                } else {
                    console.log(card.match(/\d+/)[0])
                    A[card.match(/\d+/)[0]-1] -= 2
                    console.log(A)
                }

            }
            if (card[0] = "B"){
                if (card[card.length-1] == 'Y') {
                    B[card.match(/\d+/)[0]-1] -= 1
                } else {
                    B[card.match(/\d+/)[0]-1] -= 2
                }

            }
        }

    })
    return [
        A.filter((playerHp) => playerHp > 0).length,
        B.filter((playerHp) => playerHp > 0).length
    ]
}


//task6 -----------------------------------------------------------------------------------------
const tesla = {
    model: "X",
    owner: "Anton",
    year: 2021,
    color: "black",
    isСharged: true
}
showProps = (obj) => {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}
showProps(tesla);


//task7 -----------------------------------------------------------------------------------------
class Worker {
    #experience = 1.2;

    constructor(fullname, dayRate, workingDays) {
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.salary = this.dayRate * this.workingDays;
        this.salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
    }

    showSalary() {
        this.salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${this.salary}`);
    }

    showSalaryWithExperience() {
        this.salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        console.log(`${this.fullName} salary: ${this.salaryWithExperience}`);
    }

    getExperience() {
        return this.#experience;
    }

    setExperience(value) {
        this.#experience = value;
    }
}

sortingSalaries = (...workers)=>{
    workers.push(this);
    workers.forEach(element => {
        console.log(element.fullName);
        element.showSalary();
        console.log("New experience: " + element.showExp);
        element.showSalaryWithExperience();
        element.setExp = 1.5;
        console.log("New experience: " + element.showExp);
        element.showSalaryWithExperience();
    });

    workers.sort((a, b) => a.salaryWithExp () - b.salaryWithExp ());

    console.log("Sorted salary:");
    workers.forEach(element => {
        console.log(`${element.fullname}: ${element.showSalaryWithExperience()}`);
    });
}

const worker1 = new Worker("John Dow", 10, 21);
const worker2 = new Worker("Bob Marley", 2, 20);
const worker3 = new Worker("Johnny Cash", 55, 21);
console.log('----------------task7----------------')
sortingSalaries(worker1, worker2, worker3);


