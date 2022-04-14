
function Mode() {
    let date = new Date().getHours();
    if(date>8) {
        document.body.style.backgroundColor = '#0000009c';
        
    }
}

Mode();


// MATH - PI,floor,ceil,round,abs,pow,sqrt,trunc,min,max,random

var x = 5.99;
console.log(Math.PI);
console.log(Math.pow(6,3));
console.log(Math.sqrt(10));
console.log(Math.min(10,20,30,40,50,60));
console.log(Math.max(10,20,30,40,50,60));
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(5.49));
console.log(Math.abs(10));
console.log(Math.trunc(5.9))


// let s = Math.PI * Math.pow(r,2);


// random
let random = Math.floor(Math.random() * 101);

console.log(random)