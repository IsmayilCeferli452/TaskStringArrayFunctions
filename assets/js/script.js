
////1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
// let n = 21;

// function divide() {
//     if(n%3==0 && n%7==0){
//         console.log("Bolunur")
//     }else{
//         console.log("Bolunmur")
//     }
// }

// divide(n);



////2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// let n = 5;

// function factorial(n){
//     let sum = 1;
//     for (let i = 1; i <= n; i++) {
//         sum *= i
//     }
//     return sum
// }

// console.log(factorial(n));


////3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.


// let array = [1,2,3,4,5,6]

// function sumofelements(array){
//     let sum = 0;
//     let square = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]%2 == 0){
//             sum += array[i]
//         }
//     }
//     square = sum*sum;
//     return square;
// }

// console.log(sumofelements(array));


////4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// let email = "cavid@code.edu.az";

// let pass = "12345";

// function login(mail, password){
//     if(mail == "cavid@code.edu.az" && password == "12345"){
//         console.log("Login succesfull");
//     }
//     else{
//         console.log("Login failed");
//     }    
// }


// login(email, pass);


//// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let array = [1,2,3,4,5,6];

// function sumofodd(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(i%2 == 1){
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(sumofodd(array));


//// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let array = [1,2,3,4,5,6];

// function sumofodd(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(i%2 == 1){
//             count++;
//         }
//     }
//     return count
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

// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < i.length; j++) {
//         console.log(age)
//     }
// }

//a) Yashi 18-25 araliginda olan telebelerin sayi.

// function countOfStudents(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (i.age >= 18 && i.age <= 25) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countOfStudents(array));


////b) Emailinde "c" herfi olan studentlerin sayi.

// function checkEmail(arrayi){
//     let count = 0;
//     for (let i = 0; i < arrayi.length; i++) {
//         for (let j = 0; j < i.length; j++) {
//             for (let h = 0; h < j.length; h++) {
//                 if(j[h] == "c"){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }

// console.log(checkEmail(array));

////8) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// text1 = "salam"

// function changeFirstLetter(text){
//     for (let i = 0; i < text.length; i++) {
//         text[i] == text [i].toUpperCase()
//         break;
//     }
//     return text;
// }

// console.log(changeFirstLetter(text1))
