const routes = [
    {
        path: "/",
        redirect:'/search/jueArticle'
    },
    {
        path: "/search/:tabKey",
        component:()=>import("../layouts/search/SearchPage.vue")
    },

    {
        path: "/articleContent",
        component:()=>import("../layouts/search/components/articleContent.vue")
    },

    {
        path: "/test",
        component:()=>import("../layouts/test/TestPage.vue")
    },
    {
        path: "/login",
        component:()=>import("../layouts/login/LoginPage.vue")
    }
]

export default routes;