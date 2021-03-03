<template>
    <div >
        <div><img src="~/assets/img/1/1.png" alt="" @load="imgLoad"></div>
        <div class="my-content">
            <p>
               <span>雅伦巴斯蒂安文化传播有限公司</span>是一家专门提供钢琴销售、音乐培训、考级代理的全国连锁综合型公司，旗下拥有：雅伦钢琴城、雅伦巴斯蒂安国际钢琴艺术培训中心、美国CME钢琴考级代理三大主营项目。南方地区的实体旗舰店主要分布在东莞、深圳两大城市。</p><p>

<span>雅伦巴斯蒂安国际钢琴艺术中心</span>自2008年开办以来已经在深圳、东莞、佛山等地开设了十多家连锁分校，并以每年开设2-3家连锁分校的速度扩张，目前已有近百名毕业于艺术类专业院校的全职钢琴教师，及近2000名学员。本中心以美国《巴斯蒂安》钢琴教材为主，结合传统教材，多年来总结了一套适合于幼儿启蒙、少儿提高、成人速成的钢琴教学法。本中心环境优越，教学设备齐全、师资力量雄厚，每年组织钢琴学生参加国内外大型钢琴比赛获得优异成绩，学生报考广东音协、全国音协、美国CME、英皇考级通过率98%以上。</p><p>

<span>雅伦钢琴城</span>是以品牌钢琴批发、零售的全国连锁乐器贸易有限公司，华南地区的实体店主要分布在深圳、东莞、佛山三个城市，由于经营规模大、实力强，已和国内外几十个知名钢琴品牌达成厂家直销协议，使销费者花更少的钱买到好的钢琴。目前经销的有原装进口钢琴：SEILER（赛乐尔）、PIANOS SINCE（捷克佩卓夫）、c.Bechstein（贝希斯坦）、W.Hoffmann霍夫曼、KNABE-柯纳比、Pramberger（普拉姆伯格）、BERNSTEIN-伯恩斯坦、KOHLER&CAMPBELL科伦金堡、CONOBER&CABLE-克诺伯；合资品牌：Rösler（罗瑟）、Zimmermann齐默曼；亚洲品牌钢琴：SAMACK三益、YAMAHA雅马哈；国产品牌：HAILUN海伦、Pearl River珠江等几十个品牌钢琴。</p><p>

<span>“雅而不群，无与伦比”！</span>雅伦人经过十几年时间的沉淀，在华南大地上创造了属于自己的辉煌。我们将坚守“专业发展，专家引领，专注教学，专心服务”的发展理念，迎着文化大发展大繁荣的春潮，沐浴着东莞建设文化名城的春风，脚踏实地，锐意进取，朝着更加辉煌的未来前行！
            </p>
            <hr>
            <p>
               <span>联系我们</span> <br>
总机：0769-23015498 <br>

E-mail: 1930930427@qq.com<br>

地址：东莞市莞城区东纵大道地王广场三楼 <br>


网址：  www.yalunyigou.com
            </p>
        </div>
        <div><img src="~/assets/img/1/2.png" alt="" @load="imgLoad"></div>
    </div>
</template>

<script>
export default {
    name:'B1',
    methods:{
         imgLoad(){
             this.$bus.$emit('itemImageLoad')
      }
    }
}
</script>

<style scoped>

.my-content{
    padding:10px;
}
.my-content p{
    margin-bottom:1rem;
    font-weight: 300;
    font-size: 0.9rem;
    line-height: 170%;
}
span{
    font-weight: bold;
}
</style>