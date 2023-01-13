let numInput = document.getElementById("numInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubmitBtn = document.getElementById("helloSubmitBtn");


savedHelloUrl = "";
savedInput = "";


helloSubmitBtn.addEventListener("click", function(){
addApi(numInput)

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



function addApi(numInput){
    var letters = /^[1-9]+$/;
    if(numInput.value.match(letters)){
        savedInput = numInput.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch7/Game/' + savedInput;
        urlCall(savedHelloUrl)
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}





function Ch7ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch7/Game/1224').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch7ApiFunction()