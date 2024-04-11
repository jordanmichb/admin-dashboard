const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector(".search-btn");
const asideToggle = document.querySelector("aside h2");
const aside = document.querySelector("aside");
const content = document.querySelector(".content")

searchBtn.addEventListener('click', () => {
    searchbar.classList.toggle("visible"); 
    searchbar.focus();
});

asideToggle.addEventListener('click', () => {
    aside.classList.toggle("collapsed");
})

// if (window.screen.width <= 760) {
//     const asideW = aside.offsetWidth;
//     content.style.transform = `translateX(-${asideW})`
// }