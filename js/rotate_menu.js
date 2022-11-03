document.querySelector(".menu").addEventListener("click", animateMenu);

var onOffMenu = document.querySelector(".open_menu");
function animateMenu() {
    onOffMenu.classList.toggle("close_menu");
}

document.querySelector(".menu").addEventListener("click", riverseMenu);

var riverse = document.querySelector(".menu");
function riverseMenu() {
    riverse.classList.toggle("unem");
}

document.querySelector(".menu").addEventListener("click", animateUserBox);

var continer = document.querySelector(".userBox");
function animateUserBox() {
    continer.classList.toggle("active_box");
}