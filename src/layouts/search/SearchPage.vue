<template xmlns="http://www.w3.org/1999/html">
  <div id="search">
    <a-input-search
        v-model:value="searchParams.searchText"
        placeholder="input search text"
        enter-button="Search"
        size="large"
        @search="onSearch"
    />

    <bottom-divider/>

    <a-tabs v-model:activeKey="activeKey" @change="onTabChange">
<!--      <a-tab-pane key="article" tab="文章">-->
<!--        <articles :article-list="articleList"/>-->
<!--      </a-tab-pane>-->

      <a-tab-pane key="jueArticle" tab="掘金文章">
        <jue-article :jue-article-list="jueArticleList" v-show="!isShowSkeleton"/>
        <a-skeleton v-show="isShowSkeleton" active/>
      </a-tab-pane>
      <a-tab-pane key="csdnArticle" tab="CSDN文章">
        <csdn-article :csdn-article-list="csdnArticleList"  v-show="!isShowSkeleton"/>
        <a-skeleton v-show="isShowSkeleton" active/>
      </a-tab-pane>
      <a-tab-pane key="tencentArticle" tab="腾讯云社区文章">
        <tencent-article :tencent-article-list="tencentArticleList"  v-show="!isShowSkeleton"/>
        <a-skeleton v-show="isShowSkeleton" active/>
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <a-spin style="display: flex;justify-content: center;margin-top: 30px" size="large" v-show="isShowSkeleton"/>
        <pictures :picture-list="pictureList"  v-show="!isShowSkeleton"/>
      </a-tab-pane>

    </a-tabs>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref, watch} from "vue";
import BottomDivider from "../../components/BottomDivider.vue";
import Articles from "./components/article.vue"
import Pictures from "./components/picture.vue"
import Users from "./components/user.vue"
import {useRoute, useRouter} from "vue-router";
import {
  getArticlesRequest,
  getJueArticlesRequest,
  getPicturesRequest,
  getUsersRequest,
  searchRequest
} from "../../apis/apis";
import {message} from "ant-design-vue";
import JueArticle from "./components/jueArticle.vue";
import CsdnArticle from "./components/csdnArticle.vue";
import TencentArticle from "./components/tencentArticle.vue";


const isShowSkeleton = ref(false)

const articleList: any = ref([])

const pictureList: any = ref([])
const jueArticleList: any = ref([])
const csdnArticleList:any = ref([])
const tencentArticleList :any = ref([])

const route = useRoute()
const router = useRouter()
const activeKey = ref(route.params.tabKey)



/**
 * 页面初始加载
 * @param params
 */
const loadData = async (params: any,key:any) => {
  isShowSkeleton.value = true
  params.type = key
  console.log('type',params.type)
  const res = await searchRequest(params)
  if(res.data.code === 0){
    if(route.params.tabKey === 'article'){
      articleList.value = res.data.data.dataList
    }else if(route.params.tabKey === 'picture'){
      pictureList.value = res.data.data.dataList
    }else if(route.params.tabKey === 'jueArticle'){
      jueArticleList.value = res.data.data.dataList
    }else if(route.params.tabKey === 'csdnArticle'){
      csdnArticleList.value = res.data.data.dataList
    }else if(route.params.tabKey === 'tencentArticle'){
      tencentArticleList.value = res.data.data.dataList
    }
    isShowSkeleton.value = false;
  }

}

const initSearchParams = {
  pageSize: 10,
  currentPage: 1,
  searchText: ''
}
const searchParams = ref(initSearchParams)
onMounted(()=>{
  loadData(searchParams.value,activeKey)
})


//监听url的searchText 如果变化，就同一到searchParams中
watch(() => route.query.searchText, (value) => {
  searchParams.value = {
    ...initSearchParams,
    searchText: value
  } as any;
}, {immediate: true})




const onTabChange = (key: string) => {
  router.push({
    path: `/search/` + key,
    query: searchParams.value
  })
  console.log(searchParams.value)
  loadData(searchParams.value,key);
}

const onSearch = () => {
  router.push({
    query: searchParams.value
  })
  loadData(searchParams.value,activeKey)
}

</script>

<style scoped>
#search {
  max-width: 1080px;
  margin: 0 auto;
}
</style>