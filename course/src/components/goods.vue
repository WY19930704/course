<template>
  <div class="goods">
      <div class="title">
        <div class="time" @click="pickData()"> {{time}} </div>
        <div class="unfinished">待收: <div class="number">{{unfinished}}</div></div>
        <div class="finished">实收: <div class="number">{{finished}}</div></div>
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
      time: '04/18周三',
      unfinished: '11',
      finished: '2'
    }
  },
  methods: {
    pickData () {
      weui.datePicker({
        start: new Date().getFullYear() - 5,
        end: new Date().getFullYear() + 5,
        onChange: function (result) {},
        onConfirm: function (result) {
          console.log(result[0].value)
          console.log(result[1].value)
          console.log(result[2].value)
          let year = result[0].value
          let month = result[1].value
          let day = result[2].value
          let dt = new Date(year, month - 1, day)
          let weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
          let str = month +'/' + day + weekDay[dt.getDay()]
          console.log(str)
          this.time = str
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
}
.title{
  width: 100%;
  height: 2rem;
  padding-top: 0.72rem;
  font-size: 0.56rem;
  background-color: #ffffff;
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
</style>
