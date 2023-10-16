

// Toggle visibility//
// const backgrounBG = document.body;
// let cast = document.getElementById("Visible");
// cast.addEventListener("click", function() {
//     if (backgrounBG.style.backgroundColor == "#0000") {
//         backgrounBG.style.backgroundColor = "#fff"
//     }else {
//         backgrounBG.style.visibility = "#0000"
//     }
// })
// NAV-LINKS TOGGLE CODE

function navToggle() {
    let togglerLinks = document.querySelector(".nav-links");
    console.log(togglerLinks);
    if (togglerLinks.style.display === "none") {
        togglerLinks.style.display = "block"
    }else{
        togglerLinks.style.display = "none"
    }
}

// ABOUT ME SECTION

let actionClickSkills = document.getElementById("slillsClick").addEventListener("click", function skillsNavigate() {
    let skillsContentsClick = document.querySelector(".skillsContents");
    // console.log(skillsContentsClick);
    if (skillsContentsClick.style.display === "block") {
        skillsContentsClick.style.display = "none"
    }else{
        skillsContentsClick.style.display = "block"
    }
})

                                        // THE JS CODE FOR THE NAVBAR ICON CLICK DISPLAY
    // THE CODE BELOW IS RESPONSIBLE FOR HIDING AND DISPLAYING THE NAVBAR ITEMS ON SMALL SCREENS

let actionClickExperience = document.getElementById("experienceClick").addEventListener("click", function experienceNavigate(params) {
    let experienceContentsClick = document.querySelector(".experienceContents");
    console.log(experienceContentsClick);
    if (experienceContentsClick.style.display === "none") {
        experienceContentsClick.style.display = "block";
    }else{
        experienceContentsClick.style.display = "none"
    }
})
let actionClickEducation = document.getElementById("educationClick").addEventListener("click", function educationNavigate() {
    let educationContentsClick = document.querySelector(".educationContents");
    console.log(educationContentsClick);
    if (educationContentsClick.style.display === "none") {
        educationContentsClick.style.display = "block"
    }else{
        educationContentsClick.style.display = "none"
    }
})

// CONTACT SECTION
// 

// THE BELOW CODE IS GOING TO BE RESPONSIBLE FOR VALIDATING THE USERS CONTACT FORM....
 let clientName = document.getElementById("myName");
 let clientEmail = document.getElementById("myEmail");
 let clientMsg = document.getElementById("YourTextMsg");
 let clientActionMsg = document.getElementById("actionMsg")
const submitFormBtn = document.querySelector(".submitBtn");
submitFormBtn.addEventListener("click", function () {
    if (clientName.value == "") {
        alert("Name must be filled");
        console.log(clientName.value)
        return false;
    }else if(clientEmail.value ==""){
        alert("Email can't be blank");
        return false;
    }else{
        return true;
    }
})
console.log(clientEmail.value)

