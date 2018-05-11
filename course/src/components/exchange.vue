<template>
  <div class="selfLifting">
    <div class="title">
        <div class="time" @click="pickData()"> {{time}} </div>
        <div class="unfinished">待收: <div class="number">{{unfinished}}</div></div>
        <div class="finished">实收: <div class="number">{{finished}}</div></div>
        <div class="clear"></div>
    </div>
    <div class="searchBtn">
      <input type="text" placeholder="请输入姓名或者手机号查询">
      <div>查询</div>
      <span></span>
    </div>
    <div class="list">
      <div class="listCon">
        <div class="numberList">1</div>
        <div class="name">张三</div>
        <div class="phone">18912345623</div>
        <div class="state">待提</div>
      </div>
      <div class="clear"></div>
    </div>
    
  </div>
</template>
<script>
import weuis from 'weui'
import weui from 'weui.js'
export default{
  data () {
    return {
      time: '',
      unfinished: '11',
      finished: '2'
    }
  },
  created() {
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
    let str = month +'/' + day + weekDay[dt.getDay()]
    this.time = str
  },
  methods: {
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
        }
      })
    }
  }
} 
</script>
<style scoped>
.selfLifting{
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
.searchBtn{
  width: 100%;
  height: 2.6rem;
  line-height: 2.6rem;
  background-color: #ffffff;
  margin-top: 0.4rem;
  padding-left: 0.48rem;
  position: relative;
  margin-bottom: 0.2rem;
}
.searchBtn input{
  width: 10.64rem;
  height: 1.4rem;
  background-color: #f5f5f5;
  border: 0.02rem solid #e4e4e4;
  text-indent: 2em;
  border-radius: 0.12rem;
  background-image: url(../assets/icon_sousuo@2x.png);
  background-repeat: no-repeat;
  background-size: 0.7rem 0.7rem;
  background-position: 0.25rem 0.32rem;
  color: #666666;
  font-size: 0.56rem;
}
.searchBtn div{
  height: 1.4rem;
  width: 3rem;
  background-color: #f5f5f5;
  border: 0.02rem solid #e4e4e4;
  text-align: center;
  line-height: 1.4rem;
  margin-left: 0.2rem;
  display: inline-block;
  border-radius: 0.12rem;
  font-size: 0.64rem;
  color: #333333;
  font-weight:bold;
}
.searchBtn span{
  position: absolute;
  width: 0.7rem !important;
  height: 0.7rem !important;
  background-image: url(../assets/icon_sousuo_guanbi@2x.png);
  background-repeat: no-repeat;
  background-size: 0.7rem 0.7rem;
  top: 0.92rem;
  left:10.08rem; 
}
.list{
  padding-left: 0.48rem;
  width: 100%;
  height: 2rem;
  background-color: #ffffff;
}
.listCon{
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background-color: #ffffff;
  border-bottom: 0.02rem solid #eeeeee;
  font-size: 0.6rem;
  background-image: url(../assets/icon_jiantou@2x.png);
  background-repeat: no-repeat;
  background-size: 0.6rem 0.6rem;
  background-position: 13.4rem 0.7rem;
}
.numberList{
  float: left;
  font-weight: bold;
}
.name{
  float: left;
  font-weight: bold;
  margin-left: 1.2rem;
  max-width: 3rem;
  height: 2rem;
  overflow: hidden;
}
.phone{
  float: left;
  font-weight: bold;
  margin-left: 1.7rem;
}
.state{
  float: right;
  margin-right: 1.3rem;
}
</style>

