const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector(".search-btn");
const asideToggle = document.querySelector("aside h2");
const aside = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");



searchBtn.addEventListener('click', () => {
    searchbar.classList.toggle("visible"); 
    setTimeout(() => {searchbar.focus()}, 10);
});

asideToggle.addEventListener('click', () => {
    aside.classList.toggle("collapsed");
});

function asideHide() {
    aside.classList.remove("collapsed");
    aside.classList.remove("menu-expand");
}

let addSelfDestructingEventLisstener = (element, eventType, callback) => {
    let handler = () => {
        callback();
        element.removeEventListener(eventType, handler);
    };
    element.addEventListener(eventType, handler);
};

menuBtn.addEventListener('click', () => {
    aside.classList.add("menu-expand");
    addSelfDestructingEventLisstener(asideToggle, 'click', asideHide);
});

window.addEventListener('resize', () => {
    if (window.screen.width > 760) {
        aside.classList.remove("menu-expand");
    }
});