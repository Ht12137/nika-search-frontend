<template>
  <div style="padding: 20px;margin: 0 auto;  max-width: 1080px;">
    <a-button @click="back" style="margin-bottom: 20px">返回</a-button>
    <div v-html="articleContent" />
  </div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getJueArticleContentByIdRequest} from "../../../apis/apis";

const route :any = useRoute()
const router :any = useRouter()
const articleContent = ref()
onMounted(async ()=>{
  if(route.query.id){
    const res = await getJueArticleContentByIdRequest(route.query.id);
    articleContent.value = res.data.data
  }
})

const back = () =>{
  router.push("/search/jueArticle")
}



</script>

<style scoped>

</style>