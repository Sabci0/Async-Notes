// function *getDate(){
//     const response = yield fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
//     console.log(response)
// }
// const gen = getDate();
// gen.next().value.then((response) => gen.next(response));

async function getDate(){
    const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
    console.log(response)
}
getDate();

