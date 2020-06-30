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
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JWTEX:TIGER@jwt-rkkz2.mongodb.net/<dbname>?retryWrites=true&w=majority',{
   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log("DB Connected..."))
  .catch(err => console.log(err))


app.get('/',(req,res)=> res.send("Hi"))

app.listen(port, ()=>console.log(`on port http://localhost:${port}/`));


