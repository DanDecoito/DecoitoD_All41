function Ch9ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch9/Game/').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch9ApiFunction()