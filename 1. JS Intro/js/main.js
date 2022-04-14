// DATA TYPES - primitive / non-primitive
/*
var firstname = 'Musa'; // string

var age = 20; // number

var isStudent = false; // boolean

var address = null; // null 

var group; // undefined


// Non-primitive -> Class / Object / Method / Property

var Person = {
    ad: "Ali",
    yas: 20,
    tevellud: function() {
        return new Date().getFullYear() - this.yas;
    }
}

console.log(Person.tevellud());


// Array

var colors = ['red','black','green','white'];
console.log(colors[1])

var elements = ['p129',20,true,Person.ad];


// Functions
function Change() {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        alert("Body color changed!");
    }, 2000);
}

*/

// PRINT TO SCREEN => console / alert / document.write / innerHTML / innerText

// console.table(colors);

// // alert(isStudent);
// document.write(colors);

// function Add() {
//     document.getElementById('text').innerHTML = "<i>WELCOME</i>"
// }



// // OPERATORS
// // Arithmethic (+ - * / %)
// // Comparison (> < >= <=)
// // Assignment (= == === !=)
// // Logical ( && || !)
// // Bitwise ( ~ ^ )

// var num1 = 20;
// var num2 = 7;
// var cem = num1+num2;
// var ferq = num1 - num2;
// var hasil = num1 * num2;
// var bolme = num1 / num2;
// console.log(cem,ferq,hasil,bolme);


// var ad = "Code";
// var soyad = "Academy";
// console.log(ad+" "+soyad);

// undefined
// null
// 0

// var x = null;
// var y = 0;
// var z;

// // typeof
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)

// console.log(1+undefined);
// console.log(1+null);
// console.log(1+1);
// console.log(5+"1");
// console.log("s"-"s");
// console.log(true+false)

// console.log("a" * "b")
// console.log("666" / "a");



// var - let - const

// var x = 10;
// var x = 20;
// console.log(x);

// let y = 5;
// y = 6;
// console.log(y);

// const z = 1;
// z = 2;
// console.log(z);


// const lang = ['C','C++',"PHP","PYTHON"];
// lang.push("JAVA")
// console.log(lang)



// IF ELSE ELSE IF / SWITCH CASE

// let age = 18;

// if(age>6 && age<17) {
//     alert("School");
// }

// else if(age>=17 && age<22) {
//     alert("Bachelor");
// }

// else if(age>=22 && age<=24) {
//     alert("Master");
// }


// switch / case / break / default


// let capital = 'Baku';

// switch(capital){
//     case "Ankara":
//         alert("From Turkey");
//         break;
//      case "Baku":
//         alert("From Azerbaijan");
//         break;
//     case "Moscow":
//         alert("From Russia");
//         break;
//     default:
//         alert("None of them");
//         break;
// }


// DATE - set / get

function Vaxt() {
    let date = new Date();
    let h = date.getUTCHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if(h<10) {
        h = "0" + date.getHours();
    }
    else if(m<10) {
        m = "0" + date.getMinutes();
    }
    else if(s<10) {
        s = "0" + date.getSeconds();
    }


    let time = h + ":" + m + ":" + s
    document.getElementById('text').innerHTML = time;
}

setInterval(Vaxt,1000)