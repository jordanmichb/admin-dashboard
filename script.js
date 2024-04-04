const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener('click', () => {
    searchbar.classList.toggle("invisible");
});

// searchbar.addEventListener('click', () => {
//     searchbar.classList.toggle("invisible");
// });

