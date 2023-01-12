
function Ch4ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch4/Maths/3/4').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch4ApiFunction()