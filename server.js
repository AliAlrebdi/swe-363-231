const express = require('express');
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './mainPage2ndV.html'))
})



app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./exercise2.html"))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./exercise2P2.html"))
})

app.get('/Hire', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./Form.html"))
})

app.get('/Arabic', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./mainPage-ar.html"))
})

app.get('/Games', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./ttt.html"))
})
app.all('*', (req, res) => {
    res.status(404).send('resourse not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000..')
})