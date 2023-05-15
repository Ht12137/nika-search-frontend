import {myAxios} from "../utils/MyAnxios";

export const searchRequest = async (pageRequest:any) => {
    return await myAxios.post("/search/list/page/vo",pageRequest);
}

export const getArticlesRequest = async (pageRequest:any) => {
    return await myAxios.post("/post/list/page/vo",pageRequest);
}

export const getPicturesRequest = async (pageRequest:any) => {
    return await myAxios.post("/picture/search/page/vo",pageRequest);
}

export const getUsersRequest = async (pageRequest:any) => {
    return await myAxios.post("/user/list/page/vo",pageRequest);
}


export const getJueArticlesRequest = async (pageRequest:any) => {
    return await myAxios.post("/jueArticle/search/page/vo",pageRequest);
}

export const getJueArticleContentByIdRequest = async (id:string) => {
    return await myAxios.post("/jueArticle/get",null,{
        params:{
            articleId:id
        }
    });
}