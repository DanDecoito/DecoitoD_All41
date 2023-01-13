

let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubmitBtn = document.getElementById("helloSubmitBtn");
let lastNameReturn = document.getElementById("lastNameReturn");
let slackNameReturn = document.getElementById("slackNameReturn");
let emailReturn = document.getElementById("emailReturn");
let hobbiesReturn = document.getElementById("hobbiesReturn");



let savedInput = "";
let savedHelloUrl ="";




helloSubmitBtn.addEventListener("click", function(){
helloApi(nameInput)

})


function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            helloReturn.innerText = data.firstName;
            lastNameReturn.innerText = data.lastName;
            slackNameReturn.innerText = data.slackName;
            emailReturn.innerText = data.email
            hobbiesReturn.innerText = data.hobbies;
            console.log(data)
        }
    )
}

function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/' + savedInput
        urlCall(savedHelloUrl)
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}



function Ch8ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/Daniel').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch8ApiFunction()