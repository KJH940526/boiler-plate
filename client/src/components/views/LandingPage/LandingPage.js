import React, { useEffect } from "react";
import axios from "axios";
// import { response } from 'express'; 쓰면 안됨
// 서버에서 넘어오는게 아님
import {withRouter} from "react-router-dom"

function LandingPage(props) {
  //랜딩페이지에 들어 오자마자 실행하고
  useEffect(() => {
    //get req를 서버에 보냄 서버 주소는 /api/hello
    axios
      .get("/api/hello") //server로 보냄 -> index.js
      .then((response) => console.log(response));
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      console.log(response.data)
      if(response.data.success){
        props.history.push("/login")
      } else {
        alert("로그아웃 하는데 실패 했습니다.")
      }
    })
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
     
      {/* <button>회원가입</button>
      <button>로그인</button> */}
      <button onClick={onClickHandler}> 로그아웃 </button>
    </div>
  );
}

export default withRouter(LandingPage);
