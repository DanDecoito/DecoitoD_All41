


function Ch1ApiFunction(){
    fetch('https://decoitodallforoneapi.azurewebsites.net/Ch1/Hello/Dan').then(
        response => response.text()).then(
            (data) => {
                
                console.log(data)

            }
        )
  
}

Ch1ApiFunction()