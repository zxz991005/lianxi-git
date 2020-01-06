<template>
  <div>
    用户名:
    <input type="text" v-model="username"><br>
    密码:
    <input type="text" v-model="pwd"><br>
    <button @click="registry()">注册</button>
      <router-link to="/login">注册</router-link>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      username:'',
      pwd:''
    }
  },
  methods: {
    registry(){
        axios.post('/registry',{
          username:this.username,
          password:this.pwd
        }).then(res=>{
         
          if(res.code==1){
            alert(res.data.msg)
            this.$router.push('/login')
          }else{
            alert(res.data.msg)
          }
        })
    }
  },
}
</script>
<style>
  
</style>