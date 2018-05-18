<template>
  <div class="goodsDetail">
    <div class="title" v-show="state">
      <div>订单状态:<span>已完成</span></div>
      <div>取货时间: {{getDate}}</div>
    </div>
    <div class="main">
      <div><span>收货人:</span><span>{{takeName}}</span></div>
      <div><span>手机号:</span><span>{{phone}}</span></div>
      <div><span>详细地址:</span><span>{{address}}</span></div>
      <div><span>提货点:</span><span>{{postName}}</span></div>
      <div><span>订单号:</span><span>{{orderCode}}</span></div>
      <div><span>提货时间:</span><span>{{estimateDate}}</span></div>
    </div>
    <div class="listTitle">订单商品</div>
    <div class="list" v-for="(item,index) in list" :key="index">
      <div style="height:3rem;line-height:3rem;float:left;"><img :src="item.mainImg" alt=""></div>
      <div style="width:10rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;height:3rem;line-height:3rem;">{{item.goodsName}}</div>
      <div>x{{item.amount}}</div>
      <div class="clear"></div>
    </div>
    <div class="total">共<span>{{list.length}}</span>件商品</div>
    <div class="btn" @click="sure()" v-show="!state"><botton>确认取货</botton> </div>
  </div>  
</template>
<script>
export default{
  data () {
    return {
      state:'',
      getDate:'',
      takeName:'',
      phone:'',
      address:'',
      postName:'',
      orderCode:'',
      estimateDate:'',
      list:''
    }
  },
  created () {
    const userId = sessionStorage.getItem('id')
    const id = this.$route.params.id
    let data = new URLSearchParams()
    data.append('id',id)
    data.append('userId',userId)
    this.axios.post('/ykds-jingcai/app/jingcai/yuangong/getOrderDetail',data).then((res) => {
      console.log(res)
      this.getDate = res.data.obj.getDate
      this.takeName = res.data.obj.takeName
      this.phone = res.data.obj.phone
      this.postName = res.data.obj.postName
      this.orderCode = res.data.obj.orderCode
      this.estimateDate = res.data.obj.estimateDate
      this.address = res.data.obj.address
      this.list = res.data.obj.list
      if(res.data.obj.orderState ==5){
        this.state = true
      }
      if(res.data.obj.orderState ==3){
        this.state = false
      }
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
    sure () {
      const userId = sessionStorage.getItem('id')
      const id = this.$route.params.id
      let data = new URLSearchParams()
      data.append('orderId','PT_'+id)
      data.append('userId',userId)
      this.axios.post('/ykds-jingcai/app/jingcai/yuangong/finishOrder',data).then((res) => {
        if(res.data.success == true){
          
          this.$router.go(-1)
        }
      
      })
    }
  }
  
}
</script>
<style scoped>
.goodsDetail{
  background-color: #f5f5f5;
  height: 100vh;
}
.title{
  width: 100%;
  text-align: center;
  padding-top: 0.86rem;
  padding-bottom: 0.86rem;
}
.title :nth-child(1){
  font-size: 0.6rem;
  color: #333333;
}
.title :nth-child(1) span{
  color: #FF3C00;
}
.title :nth-child(2){
  font-size: 0.44rem;
  color: #666666;
}
.main{
  background-color: #ffffff;
  padding-top: 0.48rem;
  padding-bottom: 0.48rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #000000;
}
.main div{
  font-size: 0.56rem;
  line-height: 1.12rem;
}
.main div :nth-child(1){
  width: 3.06rem;
  display: inline-block;
}
.listTitle{
  height: 2rem;
  line-height: 2rem;
  width: 100%;
  background-color: #ffffff;
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
  background-image: url(../assets/icon_dingdan@2x.png);
  background-repeat: no-repeat;
  background-size: 1.2rem 1.2rem;
  background-position: 0.55rem 0.45rem;
  padding-left: 1.74rem;
}
.list{
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  background-color: #ffffff;
  padding-right: 0.52rem;
}
.list div{
  display: inline-block;
}
.list div img{
  width: 2.1rem;
  height: 2.1rem;
  margin-left: 0.46rem;
  margin-top: 0.48rem;
  margin-right: 0.7rem;
}
.list :nth-child(2){
  font-size: 0.6rem;
  font-weight: bold;
}
.list :nth-child(3){
  float: right;
  color: #666666;
}
.total{
  margin-top: 0.4rem;
  padding-right: 0.46rem;
  height: 1.76rem;
  line-height: 1.76rem;
  text-align: right;
  width: 100%;
  background-color: #ffffff;
  font-size: 0.6rem;
  font-weight: bold;
  color: #000000;
}
.total span{
  color: #FF3C00;
}
.btn{
  width: 100%;
  line-height: 1.96rem;
  height: 1.96rem;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  text-align: center;
}
.btn botton{
  display: inline-block;
  width: 12rem;
  height: 1.6rem;
  line-height: 1.6rem;
  border: 0.04rem solid #FF3C00;
  color: #FF3C00;
  border-radius: 0.8rem;
  text-align: center;
  font-size: 0.68rem;
  font-weight: bold;
  margin-top: 0.18rem
}
</style>

