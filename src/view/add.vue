import axios from 'axios';
<template>
  <div>
    收货人姓名:
    <input type="text" v-model="name"><br>
      收货人电话:
    <input type="text" v-model="tel"><br>
      收货人地址:
    <input type="text" v-model="address"><br>
    <span @click="save()" class="btn">保存</span>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return{
      name:'',
      tel:'',
      address:''
    }
  },
  methods: {
    save(){
      axios.post('/add',{
        name:this.name,tel:this.tel,address:this.address
      }).then(res=>{
        console.log(res)
         this.$router.push('/address')
      })
     
    }
  },
}
</script>
<style>
  .btn{
    padding: 5px;
    width: 100px;
    text-align: center;
    border: 1px solid black;
    display: block;
    margin: auto;
    margin-top: 50px;
  }
</style>