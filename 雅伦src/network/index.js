import axios from 'axios';

export function luo(config){
    const axios1=axios.create({
        baseURL:'/api',
        timeout:5000
    })

    axios1.interceptors.response.use(config=>{
        return config.data
    },err=>{
        console.log(err)
    })

    return axios1(config)
}