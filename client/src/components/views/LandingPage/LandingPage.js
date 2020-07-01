import React, {useEffect} from 'react';
import axios from 'axios'
// import { response } from 'express'; 쓰면 안됨 
// 서버에서 넘어오는게 아님



function LandingPage() {
    //랜딩페이지에 들어 오자마자 실행하고
    useEffect(()=>{
        //get req를 서버에 보냄 서버 주소는 /api/hello
        axios.get('/api/hello') //server로 보냄 -> index.js
        .then(response => console.log(response))
    }, [])


    return (
        <div>
            LandingPage
        </div>
    );
}

export default LandingPage;