const themeToggleButton = document.getElementById("troca-tema");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    body.classList.add(currentTheme)
}

themeToggleButton.addEventListener('click', () =>{
    if (body.classList.contains("dark-theme")){
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme")
    }
})