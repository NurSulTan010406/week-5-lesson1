// console.log(hello JS!);

/*console.error(hello JS!);
console.warn(hello JS!);*/

//!Переменные- именованное хранилище данных
//let,var, const

// console.log(birth)
//const birth = "01.04.2006";
//console.log(birth);
// console.log(birth);
// birth = "01.04.2006";

// console.log(LastName);
// let LastName = "kamchybekov";
// console.log(LastName);
// LastName = "Kamchybekov"
// console.log(LastName);

// console.log(firstName);
// var firstname = "nur";
// console.log(firstname)
// firstNamem = "nurs";
// console.log(firstname)

//!названия переменных
//!так нельзя
//нельзя ставить  цифру в начало,
//зарезервированные слова нельзя использоват
// let 5block = ''
//let let
//let first name
//let first-name
//const RED = "#asda";

//!так можно
//let camelCase
//let color_orange
//const RED = "#qww1313";
//const $block ="";
//const number10 ='

//!типы данных
//1 string
//let str = "strochka";
//console.log(str.length);
//console.log(str);
//const typeofStr = typeof str;
//console.log (typeofStr);

//console.log(typeofStr);

//let str1 = "qwe";
//let str2 = "asd";
//let str = 'zxc';

//2 number
//let numl = 100;
//const PI = 3.14;
//console.log(typeof num1);

// 3 boolean
//const bool1 = true;
//const boll2 = false;

//4 null- специальная  пустота
//let error = null;

//5 underfined
//let hello;
//console.log(hello);

//6 object (object,array)
//let user = {
//  name: "NURKAM",
//  age: 65,
//};
//console.log(user);
//console.log(user, age);

//console.log(user["name"]);

//array
//let arr = [false, 100, true, {}, [], "hello"];
//console.log(arr, length);
//console.log(arr);
//console.log(arr[0]);
//console.log(arr[5]);

//7  Symbol
//let id = Symbol("r567u");

//8 bigInt
//let int = 341212121n;

//!Math operators
//console.log(1 + 5);
//console.log(5 - 2);
//console.log(10 / 2);
//console.log(10 * 10);
//console.log(2 ** 3);
//console.log(10 % 7);

//!-,/,*
//console.log("10" / "2");

//!NaN Not a number
//console.log("hello" / 2);

//!+
//console.log("10" + "2");
//console.log(10 + "2");
//console.log("10" + 2);

//! true-false значение
// console.log(Boolean(0));//false
// console.log(Boolean(-1));
// console.log(Boolean(null));//false
// console.log(Boolean(underfined));//false
// console.log(Boolean("hello)");//true
// console.log(Boolean());//false

//!сравнение
//!строгое===(типы данных и значения далжны быть равны )
// console.log(3 === 5); //false
// console.log(3 === 3); //true
// console.log(3 === "3"); //false
// console.log(3 !== 5); //true

// //!нестрогое ==(значения должны быть равны )
// console.log(3 = 3);//true
// console.log("3" = 3);//true
// console.log("3" !=3);//false

//!>,<,=
// console.log(3 < 5); //true
// console.log(5 < 3); //false
// console.log(4 >= 4);
// console.log(4 <= 4);

//!из strig bnumber
//! +
// let elem = "100000";
// console.log(elem);
// console.log(+elem);

//! parseInt
// let elem2 = "10000000.10200dbfzy";
// console.log(paseInt(elem2));

//! parsefloat
// let elem3 = "100.2000feaghsdz";
// console.log(parseFloat(elem3));

//!Number
// let elem4 = "10000";
// console.log(Number(elem4));

//!из number в string
// let num = 8990;
// console.log(num);
// console.log(typeof num.toString());
// console.log(String(num));

//!alert prompt confirm
// alert("Hello, user!");
// let firstName = prompt("what is your name?");
// console.log(firstName);
//интерполяция встроеное выражение
// alert("${firstName}, welcome!");
// let value = confirm("вам есть 18,?");
let num1 = prompt("ввeдите первое число");
let operator = prompt("введите математ.оператор");
let num2 = prompt("введите второе число");
let result = eval(num1 + operator + num2); // "2+2"
//alert(result)
