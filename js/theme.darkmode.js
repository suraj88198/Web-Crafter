// const chk=document.getElementById('blueket');chk.addEventListener('click',()=>{chk.checked?document.body.classList.add("darkmode"):document.body.classList.remove("darkmode");localStorage.setItem('darkModeStatus',chk.checked);});window.addEventListener('load',(event)=>{if(localStorage.getItem('darkModeStatus')=="true"){document.body.classList.add("darkmode");document.getElementById('blueket').checked=true;}});


const chk = document.getElementById('blueket');

// Default: Dark Mode ON
document.body.classList.add("darkmode");
chk.checked = true;

// Check saved preference
const darkModeStatus = localStorage.getItem('darkModeStatus');

if (darkModeStatus !== null) {
    if (darkModeStatus === "true") {
        document.body.classList.add("darkmode");
        chk.checked = true;
    } else {
        document.body.classList.remove("darkmode");
        chk.checked = false;
    }
}

// Toggle Dark Mode
chk.addEventListener('click', () => {
    if (chk.checked) {
        document.body.classList.add("darkmode");
    } else {
        document.body.classList.remove("darkmode");
    }

    localStorage.setItem('darkModeStatus', chk.checked);
});