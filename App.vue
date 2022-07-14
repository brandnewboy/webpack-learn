<template>
  <h1 class="title">{{title}}</h1>
  <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
  </ul>
  <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
    name: 'App',
    setup(){
        let title = ref('hello app')
        return {
            title
        }
    }
})
</script>

<style scoped>
.title{
    color: pink;
}
</style>