
function Ch2ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch2/Adding/2/2').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch2ApiFunction()