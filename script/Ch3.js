
function Ch3ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch3/Question/Dan/8am').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch3ApiFunction()