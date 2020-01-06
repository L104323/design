<template>
  <div class="hello">
    <router-view />
    <ul>
      <li><router-link to="/index">首页</router-link></li>
      <li>分类</li>
      <li>答题</li>
      <li>社区</li>
      <li><router-link to="/my">我的</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:''
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
