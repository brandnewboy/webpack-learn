<template>
  <h1 class="title">{{title}}</h1>
</template>

<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
    name: 'Home',
    setup(){
        let title = ref('Home')
        return {
            title
        }
    }
})
</script>

<style scoped>
.title{
    color: deeppink;
}
</style>