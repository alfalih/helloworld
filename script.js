const darkmode = "dark-mode.css";
const lightmode = "light-mode.css";

const theme = document.getElementById("theme-mode");
function switchMode(){
    if(theme.getAttribute("href")===lightmode){
        theme.setAttribute("href", darkmode);
    } else{
        theme.setAttribute("href", lightmode);
    }
}