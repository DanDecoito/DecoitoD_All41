let helloReturn = document.getElementById('helloReturn');
let askingInputOne = document.getElementById('askingInputOne')
let askingInputTwo = document.getElementById('askingInputTwo')
let questionSubmitBtn = document.getElementById('questionSubmitBtn')

savedInput1 = "";
savedInput2 = "";

questionSubmitBtn.addEventListener("click", function(){
addApi(askingInputOne, askingInputTwo)

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






function addApi(askingInputOne, askingInputTwo)
   {
    
        savedInput1 = askingInputOne.value;
        savedInput2 = askingInputTwo.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch3/Question/' + savedInput1 + "/" + savedInput2;
        urlCall(savedHelloUrl)
  
       
   }











function Ch3ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch3/Question/Dan/8am').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
        }
