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
})

menuBtn.addEventListener('click', () => {
    
})

// if (window.screen.width <= 760) {
//     const asideW = aside.offsetWidth;
//     content.style.transform = `translateX(-${asideW})`
// }