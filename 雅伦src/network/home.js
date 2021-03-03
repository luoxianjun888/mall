import {luo} from './index';

export function getBrand(){
    return luo({
        url:'/brand'
    })
}

export function getDetail(id){
    return luo({
        url:'/detail-'+id,
    })
}

export function postComment(data,type=0){
    return luo({
        url:'/addcomment',
        method:'post',
        data:{
            data,
            type
        }
    })
}


export function getProd(type,page){
    return luo({
        url:'/prod',
        params:{
            type,
            page
        }
    })
}

export function getImg(){
    return luo({
        url:'/imgs',
    })
}

export function getProds(page){
    return luo({
        url:'/prod',
        params:{
            page
        }
    })
}