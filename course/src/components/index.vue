<template>
    <div class="index">
        <div class="title">
            <div class="titleImg"><img src="../assets/icon_tihuodian_dizhi@2x.png" alt=""></div>
            <div class="titlePlace">{{postName}}</div>
        </div>
        <div class="content">
            <div class="conL">
                <div @click="checked()"><img class="icon" src="../assets/icon_hechahuowu@2x.png" alt=""></div>
                <div class="conText">核查货物</div>
            </div>
            <div class="conR">
                <div><img class="icon" src="../assets/icon_saomaqueren@2x.png" alt=""></div>
                <div class="conText">扫码确认</div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="content">
            <div class="conL">
                <div @click="self()"><img class="icon" src="../assets/icon_zitidingdan@2x.png" alt=""></div>
                <div class="conText">自提订单</div>
            </div>
            <div class="conR">
                <div @click="dispatching()"><img class="icon" src="../assets/icon_peisongdingdan@2x.png" alt=""></div>
                <div class="conText">配送订单</div>
            </div>
        </div>
        <div class="clear"></div>
        <div class="content">
            <div class="conL">
                <div @click="exchange()"><img class="icon" src="../assets/icon_duihuandingdan@2x.png" alt=""></div>
                <div class="conText">兑换订单</div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>

export default{
  data () {
    return {
        postName:''
    }
  },
  created () {
      const postName = sessionStorage.getItem('postName')
      this.postName = postName
      console.log(this.postName)
  },
  methods: {
    checked () {
      this.$router.push({
        path: '/goods'
      })
    },
    self () {
      this.$router.push({
        path: '/selfLifting'
      })
    },
    dispatching () {
      this.$router.push({
          path: '/dispatching'
      })
    },
    exchange () {
      this.$router.push({
          path: '/exchange'
      })
    }
  }
}
</script>
<style scoped>
.index{
    padding-top: 0.92rem;
}
.title{
    font-size: 0.64rem;
    width: 5.36rem;
    margin: auto;
    margin-bottom: 3.76rem;
}
.title div{
    display: inline;
    line-height: 0.64rem;
}
.titleImg{
    padding-top: 0.08rem;
}
.title div img{
    height: 0.64rem;
    position: relative;
    top: 0.12rem;
}
.content{
    width: 8.3rem;
    margin: auto;
    position: relative;
    margin-top: 2.04rem;
    font-size: 0.56rem;
}
.conL{
    width: 2.24rem;
    height: 3.12rem;
    float: left;
}
.conR{
    width: 2.24rem;
    height: 3.12rem;
    float: right;
}
.icon{
    width:2rem;
    position: relative;
    left: 0.12rem;
}
.conText{
    margin-top: 0.4rem;
}
.clear{
    clear: both;
}
</style>
