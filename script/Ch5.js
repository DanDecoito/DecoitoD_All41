

let madLibName = document.getElementById('madLibName');
let madLibGame = document.getElementById('madLibGame');
let madLibAdj = document.getElementById('madLibAdj');
let madLibDay = document.getElementById('madLibDay');
let madLibLoc = document.getElementById('madLibLoc');
let helloReturn = document.getElementById("helloReturn");
let helloSubmitBtn = document.getElementById("helloSubmitBtn");

let savedHelloUrl ="";
let savedInput1 = "";
let savedInput2 = "";
let savedInput3 = "";
let savedInput4 = "";
let savedInput5 = "";







helloSubmitBtn.addEventListener("click", function(){

    madLibApi(madLibName, madLibGame, madLibAdj, madLibDay, madLibLoc)


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

function madLibApi(){

    savedInput1 = madLibName.value;
    savedInput2 = madLibGame.value;
    savedInput3 = madLibAdj.value;
    savedInput4 = madLibDay.value;
    savedInput5 = madLibLoc.value;

    savedHelloUrl = 'https://decoitodallforoneapi.azurewebsites.net/Ch5/Game/' + savedInput1 + '/' + savedInput2 + '/' +savedInput3 + '/' +savedInput4 + '/' +savedInput5

    urlCall(savedHelloUrl)

}





function Ch5ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch5/Game/Dan/Chess/quickly/tuesday/home').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch5ApiFunction()