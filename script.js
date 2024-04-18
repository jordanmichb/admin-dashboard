const searchbar = document.querySelector("#searchbar");
const searchBtn = document.querySelector(".search-btn");
const asideToggle = document.querySelector("aside h2");
const aside = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");

/*
 * When magnifying glass icon is clicked, searchbar collapses or expands.
 * Focus is automatically activated. A timeout is needed so that focus
 * is not stolen by the clicked element.
 */
searchBtn.addEventListener('click', () => {
    searchbar.classList.toggle("visible"); 
    setTimeout(() => {searchbar.focus()}, 50);
});

/*
 * When "dashboard" header is clicked, aside collapses or expands
 */
asideToggle.addEventListener('click', () => {
    aside.classList.toggle("collapsed");
});

/* 
 * Menu is hidden at 760px and smaller. If use unhides menu then the 
 * dashboard icon needs an event listener to be hidden again. It is 
 * only needed once, so it self destructs after use.
 */
let addSelfDestructingEventListener = (element, eventType, callback) => {
    let handler = () => {
        callback();
        element.removeEventListener(eventType, handler);
    };
    element.addEventListener(eventType, handler);
};

menuBtn.addEventListener('click', () => {
    aside.classList.add("menu-expand");
    addSelfDestructingEventListener(asideToggle, 'click', () => {
        aside.classList.remove("collapsed"); // Remove class added by first event listener
        aside.classList.remove("menu-expand");
    });
});

/*
 * Menu is hidden at 760px and smaller. If user unhides menu then resizes to
 * beyond 760, the class needs to be removed to preserve functionality and styling
 */
window.addEventListener('resize', () => {
    if (window.screen.width > 760 && aside.classList.contains("menu-expand")) {
        aside.classList.remove("menu-expand");
    }
});