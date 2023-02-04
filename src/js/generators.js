// function *magic(){
//     console.log(1);
//     yield 2;
//     console.log(3);
//     yield 4;
//     console.log(5);
// }
//
// const gen = magic();
// console.log(gen);
//
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function *magic(){
    let id = 1;
    while(true){
        yield id;
        id++;
        if(id > 3){
            return "kocham PIS"
        }
    }
}
const genNumbers = magic();
const genNumbers2 = magic();

// console.log(genNumbers.next().value)
// console.log(genNumbers2.next().value)
// console.log(genNumbers.next().value)
// console.log(genNumbers2.next().value)
// console.log(genNumbers.next().value)
// console.log(genNumbers2.next().value)

function *coroMagic() {
    let a = 10;
    let b = yield 15 + a;
    yield b
}

const c = coroMagic()

console.log(c.next())
console.log(c.next(42))

function *getDate(){
    const response = yield fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
    console.log(response)
}
const gen = getDate();
gen.next().value.then((response) => gen.next(response));