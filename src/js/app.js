//import animate from './callback.js';
const sqrRef = document.querySelector('.square');

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
            sqrRef.style.top = "300px";
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



async function animate() {
    await moveRight();
    await moveDown();
    await moveLeft();
    await moveUp();
    await animate();
}
animate();