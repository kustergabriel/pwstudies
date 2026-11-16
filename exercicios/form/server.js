import express from 'express'
const app = express()

import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({extended:true}))

app.post('/usuarios', (req,resp) => {
    console.log(req.body)
    resp.send('Parabens')
})

app.post('/usuarios/:id', (req,resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('alterado')
})

app.listen(1337)

