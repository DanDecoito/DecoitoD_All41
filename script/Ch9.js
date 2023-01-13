let helloReturn = document.getElementById("helloReturn");
let helloSubmitBtn = document.getElementById("helloSubmitBtn");


helloSubmitBtn.addEventListener("click", function(){
    Ch9ApiFunction()
})

function Ch9ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch9/Game/').then(
        response => response.text()).then(
            (data) => helloReturn.textContent = data
        )
        
}
Ch9ApiFunction()