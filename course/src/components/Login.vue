<template>
  <div class="hello">
    <div class="imgContainer">
      <img src="../assets/backImg.png" alt="">
    </div>
    <div class="formContainer">
      <form action="">
        <input v-model="account" id="account" placeholder="请输入账号" type="text">
        <input v-model="password" placeholder="请输入密码" type="password" name="" id="password">
        <button @click="submit()" id="submit" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account:'',
      password:''
    }
  },
  methods: {
    submit () {
       this.$router.push({
        path: `/index`
      })
      // let account = this.account
      // let password = this.password
      // let data = new URLSearchParams()
      // data.append('admin', account)
      // data.append('password', password)
      // this.axios.post("/ykds-jingcai/app/jingcai/jcUser/login",data).then(res => {
      //   console.log(res)
      //   if(res.data.code == 200){
         
      //   }
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:100%;
  overflow:hidden;
}
.imgContainer{
  width:100%;
}
.imgContainer img{
  width: 100%;
  height: 100%;
}

form{
  width:12.4rem;
  height: 12.24rem;
  border-radius: 0.1rem;
  box-shadow: 0.02rem 0.02rem  0.04rem  0.08rem  #f3f1f1;
  background-color: #ffffff;
  margin: auto;
  position: absolute;
  top: 6.88rem;
  left: 1.3rem;
}
#account{
  top: 1.76rem;
  left:0.9rem;
  background-image: url(../assets/icon_zhanghao@2x.png);
  background-size: 1rem 1rem;
  background-position: 0.01rem 0.16rem;
  background-repeat: no-repeat;
}
#password{
  top: 3.74rem;
  left:0.9rem;
  background-image: url(../assets/icon_yanzhengma@2x.png);
  background-repeat: no-repeat;
  background-position: 0.02rem 0.16rem;
  background-size:1rem 1rem ;
}
#submit{
  position: absolute;
  top: 8.24rem;
  left:1.8rem;
  width: 8.8rem;
  height:1.6rem ;
  border: 0.04rem solid #FF3C00;
  border-radius: 0.8rem;
  background-color: #ffffff;
  color:#FF3C00;
  font-size: 0.68rem;
}
#submit:focus{
  outline: none;
}
form input{
  width: 10.6rem;
  height: 1.6rem;
  border-bottom: 0.02rem solid #cccccc;
  position: absolute;
  text-indent: 4em;
}
form input:focus{
  outline: none;
}
</style>
