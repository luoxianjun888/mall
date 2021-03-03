<template>
    <div class="home card">
        <h1>首页</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'home',
    data(){
        return{

        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            axios.get('http://localhost:8080/api').then(res=>{
                console.log(res.data)
            })
        }
    }
}
</script>