<template>

  <router-link to="/post/create" class="btn btn-dark mx-3 my-3">create</router-link>
  <div v-if="loading" class="spinner-border  spinner-border-sm  " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="container">
    <div class="row row-cols-6 ">
      <div class = "">
        <div v-for="post in posts" :key="post.id" >
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <router-link :to="{name:'postshow' , params:{id:post.id}}" >
                {{post.title}}
              </router-link>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> {{post.body}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>



</template>

<script setup>

import {ref} from "vue";
import axios from 'axios'

const posts = ref({})
const loading = ref(true)
function getposts  (){
  axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
       posts.value=response.data
        loading.value = false
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

getposts()

</script>

<style scoped>

</style>