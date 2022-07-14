<template>
  <h1 class="title">{{title}}</h1>
</template>

<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
    name: 'About',
    setup(){
        let title = ref('About')
        return {
            title
        }
    }
})
</script>

<style scoped>
.title{
    color: rgb(20, 255, 102);
}
</style>