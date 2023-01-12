function Ch8ApiFunction() {
    fetch('https://decoitodallforoneapi.azurewebsites.net/StudentDirectory/GetStudentByFirstName/Daniel').then(
        response => response.text()).then(
            (data) => console.log(data)
        )
}
Ch8ApiFunction()