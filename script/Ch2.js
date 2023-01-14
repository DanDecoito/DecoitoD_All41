let helloReturn = document.getElementById('helloReturn');
let addInputOne = document.getElementById('addInputOne')
let addInputTwo = document.getElementById('addInputTwo')
let addSubmitBtn = document.getElementById('addSubmitBtn')




addSubmitBtn.addEventListener('click', function(){
addApi(addInputOne, addInputTwo)

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

function addApi(addInputOne, addInputTwo){
    var letters = /^[1-9]+$/;
    if(addInputOne.value.match(letters) && addInputTwo.value.match(letters)){
        savedInput1 = addInputOne.value;
        savedInput2 = addInputTwo.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch2/Adding/' + savedInput1 + "/" + savedInput2;
        urlCall(savedHelloUrl)
    }else{
        addReturn.textContent = "Enter a valid respsonse";
    }
}










function Ch2ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch2/Adding/2/2').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch2ApiFunction()