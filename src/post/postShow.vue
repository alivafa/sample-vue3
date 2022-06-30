<template>
  <h3>posts :</h3>
  <div v-if="loading" class="spinner-border  spinner-border-sm  " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="container">
    <div class="row row-cols-6 ">
      <div class = "">
        <div >
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <router-link to="" >
                {{post.title}}
              </router-link>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> {{post.body}}</li>

            </ul>
            <div class="card-footer">
              <router-link  class="btn btn-dark mx-3" :to="{name:'editPost' , params:{id:post.id}}">Edit</router-link>
              <button class="btn btn-danger mx-5" @click="deletePost">Delete</button>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>



</template>

<script setup>

import {ref} from "vue";
import axios from 'axios'
import {useRoute} from "vue-router";
import Swal from "sweetalert2";


const post = ref({})
const loading = ref(true)
const route = useRoute()
function getposts  (){
  axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then(function (response) {
        // handle success
        post.value=response.data
        loading.value = false
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

getposts()

function deletePost(){
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then(function(){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title:`post (${route.params.id}) deleted`,
          showConfirmButton: false,
          timer: 1500
       })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

</script>

<style scoped>

</style>