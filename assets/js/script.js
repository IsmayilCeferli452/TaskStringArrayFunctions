"use strict";


//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function divide(number) {
//     if(number%3 == 0 && number%7 == 0){
//         console.log("Bolunur");
//     }else{
//         console.log("Bolunmur");
//     }
// }

// let n = 21;
// divide(n);


////2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

// function factorial(number){
//     let multiple = 1;
//     for (let i = 1; i <= number; i++) {
//         multiple *= i;
//     }
//     return multiple;
// }

// let n = 4;
// console.log(factorial(n));


////3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let array = [1,2,3,4,5,6]

// function sumOfOddNumbers(array){
//     let sum = 0;
//     let square = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]%2 == 0){
//             sum += array[i];
//         }
//     }
//     square = sum*sum;
//     return square;
// }

// console.log(sumOfOddNumbers(array));


////4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function login(mail, password){
//     if(mail == "cavid@code.edu.az" && password == "12345"){
//         console.log("Login succesfull");
//     }
//     else{
//         console.log("Login failed");
//     }    
// }

// let email = "cavid@code.edu.az";
// let pass = "12345";
// login(email, pass);


//// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let array = [1,2,3,4,5,6];

// function sumOfOddNumbers(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(i%2 == 1){
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sumOfOddNumbers(array));


//// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let array = [1,2,3,4,5,6];

// function sumofodd(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(i%2 == 1){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(sumofodd(array));


//// 7) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.

// let student1 = {
//     sname: "Ismayil",
//     ssurname: "Ceferli",
//     age: 24,
//     email: "ismayil123@gmail.com"
// };

// let student2 = {
//     sname: "Nurlan",
//     ssurname: "Umudov",
//     age: 22,
//     email: "nurlan@gmail.com"
// };

// let student3 = {
//     sname: "Nesir",
//     ssurname: "Dadashov",
//     age: 29,
//     email: "nesir@gmail.com"
// };

// let array = [student1, student2, student3];

//a) Yashi 18-25 araliginda olan telebelerin sayi.

// function countOfStudents(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].age >= 18 && array[i].age <= 25) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countOfStudents(array));


////b) Emailinde "c" herfi olan studentlerin sayi.

// function checkEmail(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         let emailArray = array[i].email.split("@");
//         let trueEmail = emailArray[0];
//         if(trueEmail.includes("c")){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(checkEmail(array));

////8) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// text1 = "salam"

// function changeFirstLetter(text){
//     let modifiedText = "";
//     modifiedText += text[0].toUpperCase();
//     modifiedText += text.slice(1);
//     return modifiedText;
// }

// console.log(changeFirstLetter(text1));





// let person = {
//     name: "Ismayil",
//     surname: "Ceferli",
//     age: 24
// }

// document.querySelector("h1").innerText = person.name



// let datas = [
//     {
//         name: "Nurlan",
//         surname: "Umudov",
//         groups: [
//             "Pb101",
//             "Pb102"
//         ],
//         teachers: [
//             "Hesen",
//             "Elxan"
//         ]
//     },

//     {
//         name: "Kamran",
//         surname: "Muradov",
//         groups: [
//             "Pb101",
//         ],
//         teachers: [
//             "Hesen"
//         ]
//     }
// ]



// let surname = "Fexriyye Tagizade";

// console.log(surname.length);

// console.log(surname.toLowerCase());

// console.log(surname.toUpperCase());

// console.log(surname.trim());

// console.log(surname.startsWith("T"));

// console.log(surname.indexOf("a"));

// console.log(surname.lastIndexOf("a"));

// console.log(surname.substring(0,3));

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];
    
// }

// console.log(surname.includes("t".toUpperCase()));

// let array5 = surname.split(" ");

// console.log(array5[0]);

// console.log(surname.charAt(1));

// console.log(surname.charCodeAt("1"));

// console.log(surname.slice(4));

// console.log(surname.slice(4,surname.length));

// console.log(surname.replace("a", "b"));

// console.log(surname.replaceAll("a", "b"));


// let nums = [1,2,3,4,6,8,9];

// for (const i of nums) {
//     console.log(i);
// }

// let datas = [
//     {
//         name: "Nurlan",
//         surname: "Umudov",
//         groups: [
//             "Pb101",
//             "Pb102"
//         ],
//         teachers: [
//             "Hesen",
//             "Elxan"
//         ]
//     },

//     {
//         name: "Kamran",
//         surname: "Muradov",
//         groups: [
//             "Pb101",
//         ],
//         teachers: [
//             "Hesen"
//         ]
//     }
// ]

// for (const key in datas) {
//     console.log(datas[key]);
// }

// for (const key in datas) {
//     console.log(datas[key].name);
// }

// let nums = [1,2,2,3];

// nums.forEach((element,i) => {
//     console.log(element + " " + i)
// });

// let data = nums.toString();

// console.log(data);

// let data1 = nums.join("-")

// nums.pop();

// nums.push(5);

// nums.shift();

// nums.unshift(5);

// console.log(nums);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);

// let address = "Ehmedli";

// let result = [...address];

// console.log(result);


// let obj = {
//     name: "Semed",
//     surname: "Semedov"
// }

// let obj2 = {...obj};

// console.log(obj2);



// function showText(){
//     console.log("Salam");
// }

// function showText(text){
//     console.log(text);
// }

// showText("Salam");


// function sum(a, b){
//     let result = a + b;
//     console.log(result);
// }

// sum(5,10);

// let datas1 = [1,2,34,5,76]

// function findData(array){
//     for (const i of array) {
//         if(i == 10){
//             console.log("Found");
//             return;
//         }
//     }
// }

// findData(array);


// function sumOfNums(a, b){
//     return a + b;
// }

// console.log(sumOfNums(5, 10));

// let datas1 = [1,2,34,5,76]

// function test(array){
//     array[0] = 100;
//     console.log(array);
// }

// test(datas1);

// let b = 10;

// function test2(a){
//     a = 20;
//     console.log(a);
// }

// test2(b);

// console.log(b);

// let datas1 = [1,2,34,5,76]

// function test3 (...array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(element);
//     }
// }

// test3(1,2,3);


// function test() {
//     console.log(arguments);
// }

// test(1,2,3,5);


// let showText = () => {
//     console.log("text");
// }

// showText();

// let showText = (text) => {
//     console.log(text);
// }

// showText("Salam");

// function showNumber() {
//     console.log(this);
// }

// showNumber();

// const showNum = () => {
//     console.log(this)
// }

// showNum();


// let student = {
//     name: "Reshad",
//     surname: "Aghayev",
//     age: 22,
//     address: "Xalqlar Dostlugu",
//     getFullName: function(){
//         console.log(this.name + " " + this.surname);
//     },
//     getFullData: () => {
//         console.log(this);
//     }
// }

// student.getFullName();
// student.getFullData();