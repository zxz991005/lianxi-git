<template>
  <div>
    用户名:
    <input type="text" v-model="username"><br>
    密码:
    <input type="text" v-model="password"><br>
    <button @click="dl()">登录</button>
     <router-link to="/registry">注册</router-link>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    dl(){
      axios.post('/login',{
        username:this.username,
        password:this.password
      }).then(res=>{
        if(res.data.code==1){
          alert('登录成功')
          this.$router.push('/')
        }else{
          alert('登录失败')
        }
      })
    }
  },
}
</script>
<style>
  
</style>