function weatherInformation(city) {
    //const request = require("request")

    if (city.content == "tempo") {
        city.reply("tu quer ver o tempo de qual lugar?")
}else if(city.content == "sair") {
    city.reply("to aq qualquer coisa")
}

    // request("api.openweathermap.org/data/2.5/weather?q=SaoPaulo&appid=6be0c80c31e8caf69601e5691b92d981", 
    // function (error, response, body) {
    //     console.log("error:", error)
    //     console.log("statusCode:", response && response.statusCode)
        
    //     const parsedWeather = JSON.parse(body)
    //     console.log("a temperatura de {$city} é " + parsedWeather["main"]["temp"])
    // })
}

exports.default = weatherInformation