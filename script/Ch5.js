function Ch5ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch5/Game/Dan/Chess/quickly/tuesday/home').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch5ApiFunction()