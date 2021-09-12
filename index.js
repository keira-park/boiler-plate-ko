const express = require('express') // express 모듈 가져오기
const app = express() // express function 이용해서 새로운 express app 생성
const port = 8800 //백 서버

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Keira-park:abcd1234@cluster0.h8jyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // port 5000에서 시작

