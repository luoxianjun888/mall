import {luo} from './index';
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

export class Goods{
    constructor(detail,brand,comment){
        this.title=detail.pname;
        this.jieshao=detail.jieshao;
        this.img=detail.pimg;
        this.bname=brand.bname;
        this.comment=comment;
    }
}


