// 1
    
    // //  1: Використання getElementById
    // const element1 = document.getElementById("test");
    // element1.textContent = "Last"; // Змінюємо вміст на "Last"

    // //  2: Використання querySelector
    // const element2 = document.querySelector("#test"); // Використовуємо селектор ID
    // element2.innerHTML = "Last"; // Змінюємо вміст на "Last" (альтернативний метод)

    // // Додатково: Виведення в консоль для перевірки
    // console.log("Зміст елемента (getElementById):", element1.textContent);
    // console.log("Зміст елемента (querySelector):", element2.innerHTML);



    // 2


    // // Отримуємо елемент зображення
    // const imgElement = document.querySelector("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yS-JtGmatskbJyXoYqvTLKW0FTZZXKwhUA&s");

    // // Змінюємо атрибут src на нове зображення
    // imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5szWL45_SSCxUWSwLJa_Ptp9GPUbM4dhOaA&s";

    // // Отримуємо HTML-вміст тегу img (з новим src)
    // const imgTagContent = imgElement.outerHTML;

    // // Виводимо вміст тегу у модальному вікні
    // alert(`Вміст тегу img:\n${imgTagContent}`);


    // 3


    // // Отримуємо всі елементи <p> всередині div#text
    // const paragraphs = document.querySelectorAll("#text p");

    // // Перебираємо кожен елемент і виводимо його вміст із номером
    // paragraphs.forEach((paragraph, index) => {
    //   console.log(`Selector text ${index}: ${paragraph.textContent}`);
    // });


    // 4

    // // Отримуємо елемент <ul> за id
    // const list = document.getElementById("list");

    // // Отримуємо всі елементи <li> за допомогою getElementsByTagName
    // const items = list.getElementsByTagName("li");

    // // Перевірка, чи є достатньо елементів у списку
    // if (items.length !== 5) {
    //   alert("Список повинен містити рівно 5 елементів!");
      
    // }

    // // Формуємо масив у потрібному порядку: 1-й, 5-й, 2-й, 4-й, 3-й
    // const result = [
    //   items[0].textContent, // 1-й елемент
    //   items[4].textContent, // 5-й елемент
    //   items[1].textContent, // 2-й елемент
    //   items[3].textContent, // 4-й елемент
    //   items[2].textContent  // 3-й елемент
    // ];

    // // Виводимо результат у модальному вікні
    // alert(result.join(", "));


    // 5

//     // Стилізація заголовка h1
//     const header = document.querySelector("h1");
//     header.style.backgroundColor = "lightgreen";
//     header.style.padding = "5px";

//     // Стилізація абзаців у div#myDiv
//     const paragraphs = document.querySelectorAll("#myDiv p");
//     paragraphs.forEach((p, index) => {
//       switch (index) {
//         case 0: // First paragraph
//           p.style.color = "black"; // Без змін, але явно вказуємо
//           break;
//         case 1: // Second paragraph
//           p.style.color = "red";
//           break;
//         case 2: // Third paragraph
//           p.style.textDecoration = "underline";
//           break;
//         case 3: // Fourth paragraph
//           p.style.color = "black"; // Без змін
//           break;
//       }
//     });

//     // Стилізація списку ul#myList на горизонтальний
//     const listItems = document.querySelectorAll("#myList li");
//     listItems.forEach(li => {
//       li.style.display = "inline";
//       li.style.marginRight = "15px";
//       const newText = listItems[0].textContent + listItems[1].textContent + listItems[2].textContent;
// listItems[0].textContent = newText; // "Makemehorizontal!"
// listItems[1].remove(); // Видаляємо другий <li>
// listItems[1].remove(); // Видаляємо третій <li> (індекс оновлюється)
//     });

//     // Сховати span
//     const span = document.querySelector("span");
//     span.style.display = "none";


// 6


// // Функція для введення повідомлень і зміни значень
//     function updateInputs() {
//       // 1) Введення двох повідомлень через prompt
//       const message1 = prompt("Введіть перше повідомлення:");
//       const message2 = prompt("Введіть друге повідомлення:");

//       // Отримуємо елементи input
//       const input1 = document.getElementById("input1");
//       const input2 = document.getElementById("input2");

//       // Перевірка наявності елементів
//       if (!input1 || !input2) {
//         console.log("Елементи input не знайдено!");
//         return;
//       }

//       // Перевірка введення: якщо prompt скасовано або залишено порожнім, зберігаємо початкові значення
//       input1.value = message1 !== null && message1 !== "" ? message1 : input1.value;
//       input2.value = message2 !== null && message2 !== "" ? message2 : input2.value;

//       // 2) Міняємо значення input'ів місцями
//       const temp = input1.value;
//       input1.value = input2.value;
//       input2.value = temp;

//       // Логування результату для перевірки
//       console.log("Значення input1:", input1.value);
//       console.log("Значення input2:", input2.value);
//     }

//     // Викликаємо функцію
//     updateInputs();


// 7


// // Створюємо елемент <main>
//     const mainElement = document.createElement("main");
//     mainElement.className = "mainClass check item"; // Додаємо класи

//     // Створюємо елемент <div> із id="myDiv"
//     const divElement = document.createElement("div");
//     divElement.id = "myDiv";

//     // Створюємо елемент <p> із текстом "First paragraph"
//     const pElement = document.createElement("p");
//     pElement.textContent = "First paragraph";

//     // Додаємо <p> до <div>
//     divElement.appendChild(pElement);

//     // Додаємо <div> до <main>
//     mainElement.appendChild(divElement);

//     // Додаємо <main> до <body>
//     document.body.appendChild(mainElement);

//     // Логування для перевірки
//     console.log("Створена структура:", document.body.innerHTML);

    