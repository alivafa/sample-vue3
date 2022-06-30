import {createRouter , createWebHistory} from "vue-router";

import HomeApp from  "@/HomeApp"
import UserApp from "@/user/UserApp"
import PostApp from "@/post/PostApp";
import userShow from "@/user/userShow"
import postShow from "@/post/postShow"
import postCreate from "@/post/postCreate";
import editPost from "@/post/editPost"



const routes = [

    {path:"/" , name:"Home" ,component:HomeApp},
    {path: "/user" , name : "user" , component: UserApp},
    {path: "/user/:id" , name: "usershow" ,component: userShow},




    {path: "/post" , name: "post" , component: PostApp},
    {path: "/post/:id" , name: "postshow" , component: postShow},
    {path: "/post/create" , name: "postcreate" , component: postCreate},
    {path: "/post/edit/:id" , name: "editPost" , component: editPost}


]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router