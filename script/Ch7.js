function Ch7ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch7/Game/1224').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch7ApiFunction()