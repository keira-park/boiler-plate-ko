const express = require('express') // express 모듈 가져오기
const app = express() // express function 이용해서 새로운 express app 생성
const port = 8800 //백 서버
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

//application/x-www-form-urlencoded 이렇게 된 데이터를 가져올 수 있게 해줌
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입 데이터를 가져올 수 있게 해줌 
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    // 회원 가입 시 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // port 8800에서 시작
