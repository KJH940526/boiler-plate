//node.js = 자바스크립트를 웹브라우저가 아닌 서버사이드에서도 사용가능.
//express.js = node.js의 freamework 예시) node.js가 자동차의 엔진이면, 그 엔진을 이용해서 자동차를 만드는 프레임워크
//=> node.js를 쉽게 이용하기 위한 freamework
//npm init으로 package.json을 생성
//npm install express --save 실행 => node_modules 폴더 생성
//package.json에 dependencies에 express 추가됨
//install한 dependencies들을 이 폴더에서 관리됨.
//https://www.zerocho.com/category/NodeJS/post/58285e4840a6d700184ebd87
//npm run start
//Model은 Schema를 감싸주는 역할
//Schema는 하나하나의 정보를 지정한다.



const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require("./config/key")

const { User } = require("./models/User");



//가져오는 정보를 분석해서 가져올수 있게 한다.
app.use(bodyParser.urlencoded({extended: true}));

//json 타입으로 된것을 분석해서 가져온다.
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log("DB Connected..."))
  .catch(err => console.log(err))


app.get('/',(req,res)=> res.send("Hi"))

app.post('/register',(req,res)=> {
  //회원가입할떄 필요한 정보들을 client에서 가져오면
  //그것을들 데이터 베이스에 넣어준다.

  //req.body 안에는 json 형식으로 들어있다.
    const user = new User(req.body)
  //save는 몽고db에서 오는 메소드
    user.save((err, userInfo)=>{
      if(err) return res.json({ success: false, err})
      return res.status(200).json({
        success: true
      })
    })
})




app.listen(port, ()=>console.log(`on port http://localhost:${port}/`));


