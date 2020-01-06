<template>
  <div class="address">
     <div class="nav">
       <span @click="goback()">返回</span>
       <span @click="goadd()">添加</span>
     </div >
     <div class="main">
        <div v-for="(item,index) in addresslist" :key="index" class="sav">
        <h2>
          {{item.name}}
        </h2>
        <p>
          {{item.tel}}
        </p>
        <span>
          {{item.address}}
        </span>
        <button class="bj" @click="bj(item)">编辑</button>
         <button class="del" @click="del(item.id)">删除</button>
      </div>
     </div>
     
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return{
      addresslist:[]
    }
  },
  created() {
     axios.get('/getlist').then(res=>{
        this.addresslist=res.data.data
     })
  },
  methods: {
    goback(){
      this.$router.push('/')
    },
    goadd(){
      this.$router.push('/add')
    },
    del(id){
      axios.post('/del',{
        id
      }).then(res=>{
        if(res.data.code==1){
           alert('删除成功')
         this.addresslist=res.data.data
        }else{
          alert('删除失败')
        }
       
     
      })
    },
    bj(item){
      console.log(item)
      this.$router.push({name:'redact',params:{id:item.id,name:item.name,tel:item.tel,address:item.address}})
    }
  },
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  .address{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .nav{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: red;
  }
  .nav>span{
  
    width: 40%;
    border: 2px solid white;
      display: flex;
    align-items: center;
    justify-content: center;
  }
  .sav{
    border: 1px solid black;
    padding: 10px 5px;
    margin-top: 7px;
    position: relative;
    height: 120px;
  }
  .bj{
    border: none;
    outline: none;
    position: absolute;
    right: 10px;
    top: 30px;
  }
  .del{
     border: none;
    outline: none;
    position: absolute;
    right: 10px;
    top: 50px;
  }
</style>