//! 1)Prompdan daxil olan ədədin faktorialini tapin
//! 2)Arrayin içərisindəkiləri kiçikdən böyüyə göstərin
//! 3)Arraydaki sadə ədədləri göstərin
//! 4)Stringdə olan saitleri ve onlarin sayini tapin
//! 5)Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin
//! 6)Verilən cümlədə bütün sözlerin baş hərfini böyüdün
//! 7)Verilən ədəddən sonraki ilk sade ədədi tapin
//! 8)Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin
//! 9)Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin
//! 10)Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin
//! 11)Daxil olunan  stiringin ilk hərfini böyüyə çevir
//! 12)Arrayda forla ədədləri 5 vahid artirmaq
//! 13)n = 7
//! 1
//! 1 2
//! 1 2 3
//! 1 2 3 4
//! 1 2 3 4 5
//! 1 2 3 4 5 6
//! 1 2 3 4 5 6 7
//! 14) a = 4, b = 5
//! * * * *
//! *     *
//! *     *
//! *     *
//! * * * *
//! 15) Fibonacci sequence-ni recursion ile edin
//! 16) ES6 ve ondan sonrakilar nədir?
//! 17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
//! 18)Hoisting dedikdə nə başa düşürsüz?
//! 19)HOF nəyə deyilir?
//! 20)Callback nədir?
//! 21)Data types neçə dənədir və hansılardır?
//! 22)Let ve const fərqi nələrdir?
//! 23)Recursion funksiya nədir və if else olmadan yazmaq mümkündür?
//! 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin
//! 25)Hansı method arrayı string’e çevirir?

//**************************************************************************

//! 13. n = 7
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

// function n() {
//   let a = "";
//   for (let i = 1; i <= 7; i++) {
//     for (let k = 1; k <= i; k++) {
//       a += k + " ";
//     }
//     a += "\n";
//   }
//   console.log(a);
// }
// n();

//! 14. a = 4, b = 5
// * * * *
// *     *
// *     *
// *     *
// * * * *
// let a = "";
// function star() {
//   for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 4; k++) {
//       if (i == 0 || i == 4 || k == 0 || k == 3) {
//         a += "* ";
//       } else {
//         a += "  ";
//       }
//     }
//     a += "\n";
//   }
//   console.log(a);
// }
// star();

//! 6. Verilən cümlədə bütün sözlerin baş hərfini böyüdün
// let a = prompt("enter text with spaces").split(" ");
// function capitalizeWords() {
//   for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
//   }
//   console.log(a.join(" "));
// }
// capitalizeWords();

//! 20. Callback nədir?
// parametr kimi ötürülə bilən funksiya

//! 22. Let ve const fərqi nələrdir?
// letin dəyəri dəyişdirilə bilər, constun yox, constu məsələn funksiya təyin etmək üçün istifadə edə bilərik

//! 12. Arrayda forla ədədləri 5 vahid artirmaq
// let a = prompt("enter numbers with spaces").split(" ");
// for (let i = 0; i < a.length; i++) {
//   a[i] = +a[i] + 5;
// }
// console.log(`${a}`);

//! 1. Prompdan daxil olan ədədin faktorialini tapin
// let a = +prompt("enter a number");
// function factorial() {
//   let b = 1;
//   if (a <= 1) return 1;
//   if (a > 1) {
//     for (let i = 1; i <= a; i++) {
//       b *= i;
//     }
//   }
//   console.log(`${b}`);
// }
// factorial();

//! 9. Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin
// let a = prompt("how many number will you enter?");
// let b = [];
// let counter = 0;
// for (let i = 0; i < a; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   if (b[i] % 2 === 0) {
//     counter++;
//   }
// }
// console.log(`count of even numbers = ${counter}`);

//! 18. Hoisting dedikdə nə başa düşürsüz?
// funksiyanın icrasından əvvəl çağırılması, və ya dəyişənə dəyər mənsub etmədən yuxarıda göstərilməsi (var üçün keçərlidir)

//! 2. Arrayin içərisindəkiləri kiçikdən böyüyə göstərin
// let a = prompt("enter numbers with spaces").split(" ").sort((a,b)=>(a-b));
// console.log(`${a}`);

//! 5. Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin
// let a = prompt(" enter numbers with spaces").split(" ").sort((a,b)=>(a-b));
// console.log(`biggest number = ${a.at(-1)}`);

//! 8. Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin
// let a = prompt("how many number will you enter?");
// let b = [];
// let counter = 0;
// for (let i = 0; i < a; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   if (b[i] % 10 === 9) {
//     counter++;
//   }
// }
// console.log(`count of numbers that end with nine = ${counter}`);

//! 10. Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin
// let a = prompt("enter numbers 0-9, except one of them").split(" ").sort(function (a, b) {return a - b});
// function findAbsent() {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != i) {
//       return console.log(`absent number = ${i}`);
//     }
//   }
// }
// findAbsent();

//! 19. HOF nəyə deyilir?
// hof funksiyanı arqument kimi götürüb, funksiya qaytaran bir funksiyadır

//! 4. Stringdə olan saitleri ve onlarin sayini tapin
// let a = "Karim Khanjanov".toLowerCase();
// function vowel() {
//   let vowelList = "aeiou";
//   let vowels = "";
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (vowelList.indexOf(a[i]) !== -1) {
//       count += 1;
//       vowels += a[i];
//     }
//   }
//   console.log(`${count} vowels in string - ${vowels}`);
// }
// vowel();

//! 24. SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin
// asinxrondur, sinxron olanların icrasından sonra icra olunur, sinxronlar call stackdən keçdikdən sonra daxil olur və icra olunur

//! 15. Fibonacci sequence-ni recursion ile edin

// function fibo(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// }
// console.log(fibo(6));

//! 17. Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
// başqa bir leksikal skop daxilində olmasına baxmayaraq öz leksikal skopu daxilindəki dəyərin itirilməməsi

//! 11. Daxil olunan  stiringin ilk hərfini böyüyə çevir
// let a = prompt("enter a word");
// let b = a.charAt(0).toUpperCase() + a.slice(1);
// console.log(`${b}`);

//! 7. Verilən ədəddən sonraki ilk sade ədədi tapin
// let a = prompt("enter a number");
// function nPrimeNum(a) {
//   a++;
//   while (true) {
//     let counter = 0;
//     for (let i = 0; i <= a; i++) {
//       if (a % i == 0) {
//         counter++;
//       }
//     }
//     if (counter == 2) {
//       return console.log(`${a}`);
//     }
//     a++;
//   }
// }
// nPrimeNum(a);

//! 16. ES6 ve ondan sonrakilar nədir?
// array metodları map, filter; let

//! 25. Hansı method arrayı string’e çevirir?
//join()

//! 23. Recursion funksiya nədir və if else olmadan yazmaq mümkündür?
// funksiya daxilində özünün çağrılması

//! 3. Arraydaki sadə ədədləri göstərin

// let a = [78, 5, 56, 16, 87, 13];

// function prime() {
//   let b = [];

//   for (let i = 0; i < a.length; i++) {
//     let x = a[i];
//     let count = 0;
//     for (let y = 1; y <= x; y++) {
//       if (x % y === 0) {
//         count++;
//       }
//     }
//     if (count === 2) {
//       b.push(x);
//     }
//   }
//   console.log(b);
// }
// prime();

//! 21. Data types neçə dənədir və hansılardır?
// 2 növ primitiv, nonprimitiv.
// Primtivlər - ttring, Number, Boolean, undefined.
// nonprimitivlər - Array, object, function
