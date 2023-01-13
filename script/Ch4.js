
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
    if(addInputOne.value.match(letters) && addInputOne.value.match(letters)){
        savedInput1 = addInputOne.value;
        savedInput2 = addInputTwo.value;
        savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch4/Maths/' + savedInput1 + "/" + savedInput2;
        urlCall(savedHelloUrl)
    }else{
        addReturn.textContent = "Enter a valid respsonse";
    }
}





function Ch4ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch4/Maths/3/4').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch4ApiFunction()