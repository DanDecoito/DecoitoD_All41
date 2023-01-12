function Ch6ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch6/Game/3').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch6ApiFunction()