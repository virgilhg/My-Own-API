const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let speaker = {
    "omar suleiman": {
        "age": 39,
        "birthName": "Omar Suleiman",
        "birthDate": "June 3, 1986",
        'birthLocation': 'New Orleans, Louisiana',
        'residing': 'Valley Ranch Islamic Center, Irving TX',
        'preachingStyle': 'Soft, emotionally geared, but efficient',
        'occupation': 'Imam, Civil Rights Activist, Author',
        'yearsActive': '2005-present',
        'Origin': 'Palestine',
        'children': 3

    },
    'nouman ali khan': {
        "age": 47,
        "birthName": "Nouman Ali Khan",
        "birthDate": "1978",
        'birthLocation': 'East Berlin, East Germany',
        'residing': 'Bayinnah Institute, TX',
        'preachingStyle': 'Direct with some sarcasm and jokes, emotionally geared, and efficient',
        'occupation': 'Speaker, teacher, founder',
        'yearsActive': '2005-present',
        'Origin': 'Pakistan',
        'children': "N/A"
    },
    'yasir qadhi': {
        "age": 50,
        "birthName": "Yasir Qadhi",
        "birthDate": "January 30, 1975",
        'birthLocation': 'Houston, Texas',
        'residing': 'East Plano Islamic Center, Plano, TX',
        'preachingStyle': 'Direct, high-pitched, upalogethic and efficient',
        'occupation': 'Speaker, Imam, Author, teacher',
        'yearsActive': '2005-present',
        'Origin': 'Pakistan',
        'children': "N/A"
    },
    'unkown': 'This person is not available yet'

}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (request, response) =>{
    const speakerName = request.params.name.toLowerCase()
    if(speaker[speakerName]){
        response.json(speaker[speakerName])
    }
    else{
        response.json(speaker['UNKNOW'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})