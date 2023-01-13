
let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubmitBtn = document.getElementById("helloSubmitBtn");


let savedInput = "";
let savedHelloUrl ="";




helloSubmitBtn.addEventListener("click", function(){
helloApi(nameInput)

})


function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data)
        }
    )
}

function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch1/Hello/' + savedInput
        urlCall(savedHelloUrl)
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}











