<template>
  <div class="goods">
      <div class="title">
        <div class="time" @click="pickData()"> {{time}} </div>
        <div class="unfinished">待收: <div class="number">{{unfinished}}</div></div>
        <div class="finished">实收: <div class="number">{{finished}}</div></div>
        <div class="clear"></div>
      </div>
      <div class="cartList" v-for="(item,index) in cartList" :key="index">
        <div style="height:2.86rem;">
          <div class="imgCon"><img :src="item.mainImg" alt=""></div>
          <div class="textCon">
            <div style="width:6rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; ">	{{item.goodsName}}</div>
            <div>
              <div style="display:inline-block;color:#000000;font-weight:100;">{{item.goodsSpeciName}}</div>
              <div style="display:inline-block;">X{{item.amount}} (份)</div>
              <div class="clear"></div>
            </div>
          </div>
          
          <div class="inputCon">
            <div @click="minus(item)">-</div>
            <div>{{item.getAmount}}</div> 
            <div @click="add(item)">+</div>
          </div>
        </div>
        <div class="zhuCon"><label for="">备注:</label><input placeholder="单行输入" v-model="item.remarks" type="text"></div>
      </div>
      <div v-show="show" class="subBtn"><button @click="submit()">提交核查</button></div>
  </div>
</template>
<script>
const userId = sessionStorage.getItem('id')
const expressId = sessionStorage.getItem('promotersId')
import weuis from 'weui'
import weui from 'weui.js'
export default{
  data () {
    return {
      show:true,
      time: '',
      unfinished: '',
      finished: 0,
      num:'',
      cartList:[]
    }
  },
  created() {
    let data = new URLSearchParams()
    data.append('userId',userId)
    data.append('expressId',expressId)
    data.append('pageSize',10000)
    data.append('pageNo',1)
    data.append('queryDate','')
    this.axios.post("/ykds-jingcai/app/jingcai/yuangong/getPostLogs",data).then(res =>{
      if(res.data.obj.count == 0){
              this.cartList = []
              this.finished = 0
              this.unfinished = 0
              this.show = false
            }
            else{
              for(let i = 0;i < res.data.obj.list.length;i++){
                this.unfinished = this.unfinished*1
                this.unfinished += parseInt(res.data.obj.list[i].amount)  - parseInt(res.data.obj.list[i].getAmount)
                this.finished +=  parseInt(res.data.obj.list[i].getAmount)
              }
              for(let i = 0;i < res.data.obj.list.length;i++){
              res.data.obj.list[i].getAmount = parseInt(res.data.obj.list[i].amount) 
              }
              this.cartList = res.data.obj.list
              if(this.cartList[0].postStatus == 3){
                this.show = false
              }
            }
    })
    //获取当前时间
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let dt = new Date(year, month - 1, day)
    let weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    if(month < 10){
            month = '0' + month
    }
    if(day < 10){
      day = '0' + day
    }
    let timeGo = year + '-' + month + '-' + day
    
    let str = month +'/' + day + weekDay[dt.getDay()]
    this.time = str
  },
  methods: {
    //数量加减
    add (item) {

      if(item.getAmount >= item.amount){
        return
      }
      item.getAmount ++
    },
    minus (item) {
      if(item.getAmount <= 1){
        return
      }
      item.getAmount --
    },
    // 表单提交
    submit () {
      let objs = {
        userId:userId,
        logs:[]
      }
      for(let i = 0;i < this.cartList.length;i++){
        let obj = {
          id:this.cartList[i].id,
          remarks:this.cartList[i].remarks,
          postStatus:3,
          getAmount:this.cartList[i].getAmount,
        }
        objs.logs.push(obj)
      }
      let data = new URLSearchParams()
      data.append('params',JSON.stringify(objs))
      this.axios.post('/ykds-jingcai/app/jingcai/yuangong/savePostLogs',data).then(res => {
        console.log(res)
      })
      console.log(objs)
    },
    //日期选择
    pickData () {
      var that = this
      weui.datePicker({
        start: new Date().getFullYear() - 5,
        end: new Date().getFullYear() + 5,
        onChange: function (result) {},
        onConfirm: function (result) {
          let year = result[0].value
          let month = result[1].value
          let day = result[2].value
          let dt = new Date(year, month - 1, day)
          let weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
          if(month < 10){
            month = '0' + month
          }
          if(day < 10){
            day = '0' + day
          }
          let str = month +'/' + day + weekDay[dt.getDay()]
          that.time = str
          let timeStr = year + '-' + month + '-' + day
          let data = new URLSearchParams()
          data.append('userId',userId)
          data.append('expressId',expressId)
          data.append('pageSize',10000)
          data.append('pageNo',1)
          data.append('queryDate',timeStr)
          that.axios.post("/ykds-jingcai/app/jingcai/jcPostLog/getPostLogs",data).then(res =>{
            if(res.data.obj.count == 0){
              that.cartList = []
              that.finished = 0
              that.unfinished = 0
              that.show = false
            }
            else{
              for(let i = 0;i < res.data.obj.list.length;i++){
                that.unfinished = that.unfinished*1
                that.unfinished += parseInt(res.data.obj.list[i].amount)  - parseInt(res.data.obj.list[i].getAmount)
                that.finished +=  parseInt(res.data.obj.list[i].getAmount)
              }
              for(let i = 0;i < res.data.obj.list.length;i++){
              res.data.obj.list[i].getAmount = parseInt(res.data.obj.list[i].amount) 
              }
              that.cartList = res.data.obj.list
              if(that.cartList[0].postStatus == 3){
                that.show = false
              }
            } 
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.goods{
  background-color: #f5f5f5;
  height: 100vh;
  padding-top: 2rem;
}
.title{
  width: 100%;
  height: 2rem;
  padding-top: 0.72rem;
  font-size: 0.56rem;
  background-color: #ffffff;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 999;
}
.title div{
  display: inline-block;
  text-align: center;
}
.time{
  width: 4.96rem;
  height: 0.6rem;
  line-height: 0.56rem;
  border-right: 0.04rem solid #DCDCDC;
  background-image: url(../assets/icon_jiantou.png);
  background-size: 1rem 1rem;
  background-repeat: no-repeat;
  background-position: 3.8rem -0.2rem;
  float: left;
}
.unfinished{
  width: 4.96rem;
  height: 0.6rem;
  line-height: 0.56rem;
  float: left;
}
.finished{
  width: 4.96rem;
  height: 0.6rem;
  line-height: 0.56rem;
  border-left: 0.04rem solid #DCDCDC;
  float: left;
}
.number{
  color: #FF3C00;
}
.cartList{
  width: 100%;
  height: 4.76rem;
  margin-top: 0.4rem;
  background-color: #ffffff;
  padding-left: 0.44rem;
  padding-right: 0.46rem;
}
.imgCon{
  display:inline-block;
  width: 2.1rem;
  height: 2.1rem;
  position: relative;
  top: -1.2rem;
}
.imgCon img{
  width: 100%;
}
.textCon{
  display: inline-block;
  margin-top: 0.52rem;
  font-weight: bold;
  margin-left: 0.54rem;
}
.textCon :nth-child(1){
  font-size: 0.6rem
}
.textCon :nth-child(2){
  font-size: 0.52rem;
  color: #FF3C00;
  margin-top: 0.1rem;
}
.inputCon{
  /* display: inline-block; */
  float: right;
  margin-top: 0.76rem;
}
.inputCon :nth-child(1){
  background-color: #f5f5f5;
}
.inputCon :nth-child(2){
  background-color: #eeeeee;
}
.inputCon :nth-child(3){
  background-color: #eeeeee;
}
.inputCon input{
  font-size: 0.56rem;
  width: 1.6rem;
  height: 1.32rem;
  line-height: 1.32rem;
  font-weight: bold;
  text-align: center;
}
.inputCon div{
  display: inline-block;
  font-weight: bold;
  font-size: 0.56rem;
  width: 1.6rem;
  height: 1.32rem;
  line-height: 1.32rem;
  text-align: center;
}
.zhuCon{
  width: 100%;
  height: 1.38rem;
  line-height: 1.38rem;
  font-size: 0.56rem;
}
.zhuCon :nth-child(1){
  font-weight: bolder;
}
.zhuCon input{
  width: 12.4rem;
  height: 1.38rem;
  border: 0.02rem solid #999999;
  border-radius: 0.08rem;
  margin-left: 0.32rem;
  text-indent: 1em;
}
.subBtn{
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  height: 1.96rem;
  line-height: 2.1rem;
  text-align: center;
  width: 100%;
  border-top: 0.02rem solid #DCDCDC;
}
.subBtn button{
  background-color: #ffffff;
  margin: auto;
  width: 12rem;
  height: 1.6rem;
  border: 0.04rem solid #FF3C00;
  border-radius: 0.8rem;
  font-size: 0.68rem;
  color: #FF3C00;
}
</style>
