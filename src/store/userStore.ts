import { defineStore } from 'pinia'
import {myAxios} from "../utils/MyAnxios";

const useUserStore = defineStore('userStore', {
    //缓存持久化
    persist:true,
    state: () =>
        (
            {
                username: '',
                authorization: '',
                isShowModal:false,
                info:'',
            }
        ),
    actions:{
        setInfo(info:string){
            this.info = info
        },
        getInfo(){
          return this.info + "written By 倪一鸣" ;
        },
        setIsShowModal(isShowModal:boolean){
            this.isShowModal = isShowModal
        },
        getIsShowModal(){
            return this.isShowModal;
        },
        getAuthorization(){
          return this.authorization;
        },
        setAuthorization(authorization:string){
            this.authorization=authorization
        },
        clearToken(){
            myAxios.defaults.headers.token = ''
            this.authorization = ''
        }
    }
})

export {
    useUserStore
}










