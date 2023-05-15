<template>
  <a-list item-layout="horizontal" :data-source="props.tencentArticleList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta

        >
          <template #title>
            <a style="font-size: 16px"  target="_blank" :href="item.link" v-html="item.title"></a>
          </template>
          <template #description>
            <div v-html="item.brief">

            </div>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import {useRouter} from "vue-router";
const props = defineProps(['tencentArticleList'])



</script>

<style scoped>

</style>