//몽구스 모듈 호출
const mongoose = require('mongoose')

//몽구스 스키마 작성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    //trim 공백제거 
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    //role을 주는 이유는 일반 유저와 관리자를 나누기 위홤
    role: {
        type: Number,
        default: 0
    },
    //----------------------
    //object를 사용하지 않고 직접적으로 줄 수 잇다.
    image: String,
    //token을 이용해서 유효성을 관리할 수 있다.
    token: {
        type: String
    },
    //tokenExp를 이용하여 토큰 유효기간을 정한다.
    tokenExp: {
        type: Number
    }
})
//만들어진 스키마를 모델로 감싼다.
                     //이 User는 정하는거고, userSchema는 위에 만들어진 스키마 
const User = mongoose.model('User', userSchema) 

//다른곳에서 사용하기 위해서 모델 const User를 export함
module.exports = { User }