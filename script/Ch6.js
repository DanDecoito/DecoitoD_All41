
let addSubmitBtn = document.getElementById("addSubmitBtn");
let numInput = document.getElementById("numInput");
let addReturn = document.getElementById("addReturn");


savedInput = "";
savedHelloUrl = "";

addSubmitBtn.addEventListener("click", function(){
   OorEApi(numInput)
    
    })


function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            addReturn.textContent = data
            console.log(data)
        }
    )
}


function OorEApi(numInput){
    var letters = /^[1-9]+$/;
    if(numInput.value.match(letters)){
        savedInput = numInput.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch6/Game/' + savedInput
        urlCall(savedHelloUrl)
    }else{
        addReturn.textContent = "Enter a valid respsonse";
    }
}




function Ch6ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch6/Game/3').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch6ApiFunction()