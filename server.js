const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
   '21 savage': { 'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },

    'chance the rapper':{ 'age': 29,
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Chicago, Illinois'
    },

    'dylon': {   'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    // '/index.html' is where the name of the file goes to
})
app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['Dylan'])
    }
} )
app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})