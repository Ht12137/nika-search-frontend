<template>
  <a-list item-layout="horizontal" :data-source="props.articleList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
            :description="item.content"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps(['articleList'])



</script>

<style scoped>

</style>