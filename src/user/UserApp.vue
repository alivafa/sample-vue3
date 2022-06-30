<template>
<h3>users :</h3>
  <div v-if="loading" class="spinner-border  spinner-border-sm  " role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
<div v-else class="container">
  <div class="row  ">
    <div class = "col-3">
      <div v-for="user in users" :key="user.id" >
        <userCard :user ="user"/>
      </div>
    </div>
  </div>

</div>



</template>

<script setup>
import userCard from "@/user/userCard"
import {ref} from "vue";
import axios from 'axios'

const users = ref({})
const loading = ref(true)
function getusers  (){
  axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        // handle success
        users.value=response.data
        loading.value = false
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

getusers()

</script>

<style scoped>

</style>