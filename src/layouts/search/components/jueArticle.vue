<template>
  <a-list item-layout="horizontal" :data-source="props.jueArticleList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
            :description="item.brief"
        >
          <template #title>
            <a style="font-size: 16px"  target="_blank" :href="item.link" v-html="item.title"></a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import {useRouter} from "vue-router";
const props = defineProps(['jueArticleList'])
const router = useRouter()
const gotoArticleContent = (id:string) =>{
  router.push({
    path:"/articleContent",
    query:{
      id:id
    }
  })
}

</script>

<style scoped>

</style>