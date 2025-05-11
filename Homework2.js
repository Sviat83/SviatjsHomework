// 1
//  1.1

//  let x = 1;
//  let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1); // "12"
// console.log(typeof res1); // "string"


//  1.2

// let x = 1;
// let y = 2;


// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"


//  1.3

// let x = 1;
// let y = 2;

// let res3 = Boolean(x) || Boolean(y);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"


//  1.4

// let x = 1;
// let y = 2;

// let res4 = Number("x + y");
// console.log(res4); // NaN
// console.log(typeof res4); // "number"


// 2

// 2.1

// let numCheck = prompt('Введіть своє число: ', ''); 

// if (numCheck === null) { 
//     alert('До зустрічі!');
// }
//   else if (isNaN(numCheck)) { //checking if input is not a number
//     console.log('Ви не ввели число');
// } 
//   else {
//     numCheck = +numCheck;
//     if (!Number.isInteger(numCheck)) {
//         console.log('число не є цілим');
//     } 
//   else if (numCheck !== 0 && numCheck % 7 === 0) { 
//         console.log('число кратне 7');
//     } 
//   else if (numCheck > 0 && numCheck % 2 === 0) { 
//         console.log('число парне і додатне');
//     } 
//   
// }



// 3

// let checkingTypes = [ //створюємо масив в змінній 
//     1,
//     'STRING',
//     true,
//     null
// ]
// console.log(checkingTypes); //виводимо масив в консоль
// checkingTypes.push(prompt('Please, text anything in here: ', '')); //виводимо в консоль масив з новим елементом, який вводить користувач через діалогове prompt
// console.log(checkingTypes[4]);
// checkingTypes.shift(); //видаляємо перший елемент масиву
// console.log(checkingTypes)


// 4

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// console.log((cities[0] + '*' + cities[1] + '*' + cities[2])) //об'єднання через додавання роздільника як рядка і почерговий вивід масиву
// console.log(cities.join('*')) //об'єднання через метод join, який об'єднує всі елементи масиву в один рядок і розділяє їх через роздільник (separator)


// 5

// let isAdult = prompt('Вам виповнилось 18 років?\nЯкщо виповнилось - введіть - "Так"');

// if (isAdult.toLowerCase() == 'так') { //Приведення isAdult до нижнього регістру і порівняння з "так"
//   alert( 'Ви досягли повнолітнього віку' );

// } else { //якщо не "так" - не дорсягли повнолітнього віку
//   alert( 'Ви ще надто молоді' ); 
// }


// 6

// // Функція для перевірки та обчислення характеристик трикутника
// function checkTriangle() {
//     // Запит трьох сторін трикутника
//     const sideA = prompt("Введіть довжину першої сторони трикутника:");
//     const sideB = prompt("Введіть довжину другої сторони трикутника:");
//     const sideC = prompt("Введіть довжину третьої сторони трикутника:");

//     // Перевірка на скасування або порожній ввід
//     if (sideA === null || sideA === "" || sideB === null || sideB === "" || sideC === null || sideC === "") {
//       console.log("Incorrect data");
//       return;
//     }

//     // Перетворення введених значень у числа
//     const a = Number(sideA);
//     const b = Number(sideB);
//     const c = Number(sideC);

//              // Перевірка, чи введені значення є числами, додатними і чи можуть утворити трикутник
//     if (
//       isNaN(a) || isNaN(b) || isNaN(c) || // Чи є числами
//       a <= 0 || b <= 0 || c <= 0 || // Чи додатні
//       a + b <= c || b + c <= a || a + c <= b // Умова існування трикутника
//     ) {
//       console.log("Incorrect data");
//       return;
//     }
//             // a) Обчислення площі трикутника за формулою Герона
// const s = (a + b + c) / 2; // Напівпериметр
// const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Формула Герона
// console.log(`Площа трикутника: ${area.toFixed(3)}`); // Виведення площі з точністю до 3 знаків

// // b) Перевірка, чи трикутник прямокутний (теорема Піфагора)
// // Сортуємо сторони, щоб найбільша була останньою (гіпотенуза)
// const sides = [a, b, c].sort((x, y) => x - y);
// const isRightTriangle =
//   Math.abs((sides[0] ** 2 + sides[1] ** 2) - sides[2] ** 2) < 0.0001; // Допуск на похибку обчислень

// console.log(`Чи є трикутник прямокутним? ${isRightTriangle ? "Так" : "Ні"}`);
// }

// // Виклик функції
// checkTriangle();




// 7

// const now = new Date(); //Отримуємо точне значення дати, годин, хвилин і т.д. та записуємо їх в змінну
// const hours = now.getHours(); //Записуємо в змінну тільки значення годин
// if (hours >= 5 && hours < 11) { //Робимо перевірку через if ранкових годин до 11
// alert('Доброго ранку');
// } else if (hours >= 11 && hours < 17) { //Робимо перевірку через else if обідніх годин до 11
//  alert('Доброго дня');
// } else {
// const greetings = hours >= 17 && hours < 23 ? 'Доброго вечора' : 'Доброї ночі'; //Робимо перевірку через тернарний оператор вечірніх та нічних годин
// alert(greetings);
// }