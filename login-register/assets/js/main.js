/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== LOGIN CHECK ===============*/
var loginBtn = document.getElementById("login-btn");

function loginCheck(){

    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    if(username == "" && password == "")
    {
        alert("Vui l??ng nh???p th??ng tin!");

    }
    else if(username == "")
    {
        alert("Vui l??ng nh???p t??i kho???n!");
    }
    else if(password == "")
    {
        alert("Vui l??ng nh???p m???t kh???u!");
    }

    else if(username == "tamvtok321" && password == "tamvtok321")
    {
        alert("????ng nh???p th??nh c??ng!");

    }
    else
    {
        alert("T??i kho???n v?? m???t kh???u kh??ng ????ng!");
    }
}
loginBtn.addEventListener('click', loginCheck)

var regisBtn = document.getElementById("regis-btn");
function RegisterCheck(){

    var username = document.getElementById("regis-username").value;
    var password = document.getElementById("regis-password").value;
    var email = document.getElementById("regis-email").value;
    if(email == "" && username == "" && password == "")
    {
        alert("Vui l??ng nh???p th??ng tin ?????y ?????!");
    }
    else if(email == ""){
        alert("Vui l??ng nh???p email");   
    }
    else if(username == ""){
        alert("Vui l??ng nh???p t??i kho???n");

    }
    else if(password == ""){
        alert("Vui l??ng nh???p m???t kh???u");

    }
    else
    {
        alert("????ng k?? th??nh c??ng!")
    }
}
regisBtn.addEventListener('click', RegisterCheck)

