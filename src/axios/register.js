import axios from "axios";

export function getCaptcha(){
    return axios.get('/user/captcha').then(res=>{
        console.log(res)
    })
}