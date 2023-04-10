"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

const showBtn = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


for (let value of showBtn) {
    value.addEventListener('click', () => {
        overlay.classList.toggle("hidden");
        modal.classList.toggle("hidden");
    })
}

closeBtn.addEventListener('click', () => {
    overlay.classList.toggle("hidden");
    modal.classList.toggle("hidden");
})

overlay.addEventListener('click', () => {
    overlay.classList.toggle("hidden");
    modal.classList.toggle("hidden");
})

// Вариант кода как по нажатию на определенную кнопку можно сбросить модальное окно
document.addEventListener("keydown", (e) => {
    if(e.key == "Escape" && !modal.classList.contains("hidden")) {
        overlay.classList.toggle("hidden");
        modal.classList.toggle("hidden");
    } 
})









