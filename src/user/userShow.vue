<template>

  <div class="container my-5" >
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            {{user.name}}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> {{user.name}}</li>
          <li class="list-group-item"> {{user.email}}</li>
          <li class="list-group-item"> {{user.phone}}</li>
        </ul>
    </div>
  </div>

</template>


<script setup>

import {ref} from "vue";
import axios from "axios"
import {useRoute} from "vue-router"

const route = useRoute()
const user= ref({})

function getusers  (){
  axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
      .then(function (response) {
        // handle success
        user.value=response.data
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