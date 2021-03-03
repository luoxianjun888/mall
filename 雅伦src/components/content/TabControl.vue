<template>
    <div class="tab-control text-center">
        <div v-for="(item,index) in titles" :key="index"
        :class="{'active':index===currentIndex}" @click="isActive(index)"
         class="tab-control-item">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            currentIndex:0,
        }
    },
    methods:{
        isActive(index){
            this.currentIndex=index;
            this.$emit('tabclick',index);
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    border-top:var(--pink) 1px solid;
    background: rgba(255, 255, 255, 1);
}
.tab-control-item{
    flex:1;
    cursor: pointer;
}
.tab-control-item span{
    padding:3px 0;
}
.active{
    color:var(--pink);
}
.active span{
    border-bottom: var(--pink) 3px solid;
}
</style>