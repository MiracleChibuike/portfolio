
// THIS CODE IS RESPONSIBLE FOR CHANGING THE BACKGROUND COLOR OF OUR WEBSITE TO WHITE OR GRAY
let moreProjects = document.querySelector(".ExploreMore")
const linkedInMe = document.querySelector(".fa-linkedin");
const lineMe = document.querySelector(".fa-line");
const whatsAppMe = document.querySelector(".fa-whatsapp")
var email_Container = document.querySelector(".emailMe");
var phone_Container = document.querySelector(".phoneMe");
let devservicesHeader = document.querySelector(".developerServicesHeader");
let PT_Header = document.querySelector(".portfolio-header");
let Hobbies_Header = document.querySelector(".hobbiesHeader");
let last_Headre = document.querySelector(".contactHeader")
let allHeadersArray = [devservicesHeader, PT_Header, Hobbies_Header, last_Headre]
const togglebg = document.getElementById("backgroundColor-toggle");
const actionToggle = document.body;
const aboutMe = document.getElementById("about");
const homeSection = document.getElementById("home");
const icondark = document.getElementById("second-dark");
togglebg.addEventListener("click", function ChangeColor() {
    if (actionToggle.style.backgroundColor = "#000") {
        console.log(allHeadersArray)
        actionToggle.style.backgroundColor = "#dcd7d7"
        homeSection.style.color = "#000"
        aboutMe.style.color = "#000"
        devservicesHeader.style.color = "#000"
        PT_Header.style.color = "#000"
        Hobbies_Header.style.color = "#000"
        last_Headre.style.color = "#000"
        moreProjects.style.color= "#000"
        email_Container.style.color = "#000"
        phone_Container.style.color = "#000"
        linkedInMe.style.color = "#000"
        lineMe.style.color = "#000"
        whatsAppMe.style.color = "#000"
        // To change the icon
        icondark.style.display = "block"
        togglebg.style.display = "none"
    }
})
// this code is to change the background color to default when clicked
icondark.addEventListener("click", function () {
    if (actionToggle.style.backgroundColor = "#dcd7d7") {
        actionToggle.style.backgroundColor = "#000";
        icondark.style.display = "none"
        togglebg.style.display = "block"
        // changing the colors of the texts
        homeSection.style.color = "#fff"
        aboutMe.style.color = "#fff"
        devservicesHeader.style.color = "#fff"
        PT_Header.style.color = "#fff"
        Hobbies_Header.style.color = "#fff"
        last_Headre.style.color = "#fff"
        moreProjects.style.color= "#fff"
        email_Container.style.color = "#fff"
        phone_Container.style.color = "#fff"
        linkedInMe.style.color = "#fff"
        lineMe.style.color = "#fff"
        whatsAppMe.style.color = "#fff"
    }
})
// NAV-LINKS TOGGLE CODE
let navberCancel = document.getElementById("navbarCancel");
let navberActive = document.querySelector(".navbarActive");
function navToggle() {
    let togglerLinks = document.querySelector(".nav-links");
    console.log(togglerLinks);
    if (togglerLinks.style.display = "none") {
        togglerLinks.style.display = "block"
        navberActive.style.display = "none"
        navberCancel.style.display = "block"
    }else{
        
        togglerLinks.style.display = "none"
    }
}
navberCancel.addEventListener("click", function () {
    let togglerLinks = document.querySelector(".nav-links");

    if (togglerLinks.style.display = "block") {
        togglerLinks.style.display = "none"
        navberActive.style.display = "block"
        navberCancel.style.display = "none"

    }
})

// HOME SECTION
// This section is to alert a message to anyone visiting the site who wishes to buy me a coffee
let agreeSend = "Yes"
let refuseSend = "No"
const buyCoffee = document.querySelector(".coffe");
function SupportMe() {
    // For the tag to display the link
    
    let userResponse = prompt("Confirm you want to donate to Miracle?", "Yes/No");
    userResponse = userResponse.toLowerCase();
    console.log(userResponse);
    if (userResponse == 'no') {
        alert("Operation Cancelled")
    }else{
        let supportText = document.getElementById("TextCoffee");
    // Creating anchor element
    var a = document.createElement('a');
    // Creating a text node for anchor element
    var link = document.createTextNode("Visit this link to donate");
    // appending the textnode to anchor element
    a.appendChild(link);
    // Setting the title of my anchor
    a.title = 'A link to support my project';
    // setting the href prorpety
    a.href = "https://www.buymeacoffee.com/MiracleChibuike";
    // Appending the anchor element to the body
    // document.body.appendChild(a);
   alert(`${supportText.appendChild(a)} \n  \n A secured link with this reference above will be made availble for you to make your contribution...  \n 
   Kindly click on the tab titled: "Visit this link to donate"  which is going to take you to the buymeacoffee.com secured website to make your contribution\n 
    \n Thanks, I truly appreciate🤝🤝`)
    // supportText.appendChild(a);




        // fetch('https://www.buymeacoffee.com/MiracleChibuike')
        // .then(Response => Response.json())
        // .then(json => console.log(json))
        // .catch(err => console.log('Request failed', err))
    }
}
// buyCoffee.addEventListener("click", function () {
//     console.log(buyCoffee);
//     onload
// //    let CoffeResponse = prompt("What is your name?")
//   let CoffeResponse = prompt('Confirm You Want To Donate To Miracle?', "Yes/No" );
//    CoffeResponse.toUpperCase();
//    if (CoffeResponse == "Yes") {
//     // confirm("You about to make a transfer to Miracle")
//     alert(`Please Transfer to this account below \n BIC/SWIFT Code: FBNINGLA XXX \n Account Number: 3166571786 \n Account Holder: Onyia Miracle Chibuike \n Bank: First Bank Of Nigeria
//     \n OR Simply visit  https://www.buymeacoffee.com/MiracleChibuike  \n to donate directly
    
//     `)
//     let userResponse = prompt("Did you Transfer?", "Yes/No")
//     userResponse;
//     if (userResponse == "Yes") {
//         alert("Please kindly contact Miracle On the Contact Section of this page below for Confirmation. We deeply appreciate \n Thanks for your support")
//     }else{
//         confirm("Thanks for your time - The Transaction has been canceled as per your order")
//     }
//    } else if (CoffeResponse === "yes") {
//     alert(`Please Transfer to this account below \n BIC/SWIFT Code: FBNINGLA XXX \n Account Number: 3166571786 \n Account Holder: Onyia Miracle Chibuike \n Bank: First Bank Of Nigeria`)
//     let userResponse = prompt("Did you Transfer?", "Yes/No");
//     userResponse;
//     if (userResponse === "yes") {
//         alert("Please kindly contact Miracle On the Contact Section of this page  below for Confirmation. We deeply appreciate \n Thanks for your support")
//     }else{
//         confirm("Thanks for your time - The Transaction has been canceled as per your order")
//     }


//    }
//    else {
//     alert("cancelled")
//    }
  
// //    agreeSend = CoffeResponse;
// console.log(agreeSend)



// })

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

