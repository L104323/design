<template>
    <main>
        <input v-model="username"/>
        <input v-model="password"/>
        <button @click="submit()">提交</button>
    </main>
</template>
<script>
export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    submit(){
      console.log('0000')
      this.$http.post('/api/user/submit',{
        username:this.username,
        password:this.password
      })
      .then(res=>{
        console.log(999999999)
        console.log(res);
        // console.log(res.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>