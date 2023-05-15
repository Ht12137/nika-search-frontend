<template>
  <a-list item-layout="horizontal" :data-source="props.pictureList" :grid="{ gutter:16,xs:1,sm:2,md:4,lg:4,xl:3,xxl:3}">
    <template #renderItem="{ item }">
      <a-list-item>
       <a-card hoverable style="width: 240px">
         <template #cover>
           <img alt="example" :src="item.url"/>
         </template>
         <a-card-meta >
           <template #title>
             <a :href="item.url" target="blank" download>{{item.title}}</a>
             <a>下载</a>
           </template>
         </a-card-meta>
       </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps(['pictureList'])



</script>

<style scoped>

</style>