const darkmode = "dark-mode.css";
const lightmode = "light-mode.css";

const theme = document.getElementById("theme-mode");
const checked = document.getElementById("theme-switcher");
var toogle = document.getElementById('theme-switcher');

let modenow = sessionStorage.getItem('modenow')

if(!modenow){
    sessionStorage.setItem('modenow',lightmode);
}
if(modenow === darkmode){
    theme.setAttribute("href", darkmode);
    sessionStorage.setItem('modenow',darkmode);
    toogle.checked = true;
}

function switchMode(){
    modenow = sessionStorage.getItem('modenow')
    if(toogle.checked){
        theme.setAttribute("href", darkmode);
        sessionStorage.setItem('modenow',darkmode);  
        alert(cb.value);
    } else{
        theme.setAttribute("href", lightmode);
        sessionStorage.setItem('modenow',lightmode);
        alert(cb.value);
    }
    e.preventDefault();
}



