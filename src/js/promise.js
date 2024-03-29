// const receipt = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve('kebab ny friend');
//     }, 1000)
//     setTimeout(() => {
//         reject('no kebab');
//     }, 100)
// })
//
// receipt
//     .then((kebab) => {
//     console.log(kebab)
// }).catch((noKebab) =>{
//     console.log(noKebab)
// })

const sqrRef = document.querySelector(".square")

function moveLeft(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            sqrRef.style.left = "0";
            resolve();
        }, 2000)
    })
}

function moveRight(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            sqrRef.style.right = "300px";
            resolve();
        }, 2000)
    })
}

function moveDown(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            sqrRef.style.bottom = "0";
            resolve();
        }, 2000)
    })
}

function moveUp(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            sqrRef.style.top = "0";
            resolve();
        }, 2000)
    })
}



function animate() {
    moveRight()
        .then(() => moveDown())
        .then(() => moveLeft())
        .then(() => moveUp())
}
//animate();

function myFetch(url) {
    return new Promise((resolve, reject)=>{
        function handleLoaded(){
            resolve(this.response);
        }
        function handleError(){
            reject(this)
        }
        const req = new XMLHttpRequest();
        req.addEventListener('load', handleLoaded)
        req.addEventListener('error',handleError)
        req.open("GET", url);
        req.send();
    })
}
// myFetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
//     .then((response) => console.log(response))
//     .catch((error) => console.log((error)))


fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log((error)))