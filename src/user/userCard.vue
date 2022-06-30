<template>
<h1></h1>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      <router-link :to="{name:'usershow' , params:{id:user.id}}" >
        {{props.user.name}}
      </router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> {{props.user.name}}</li>
      <li class="list-group-item"> {{props.user.email}}</li>
      <li class="list-group-item"> {{props.user.phone}}</li>
    </ul>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props=defineProps({
  user:{
    type:Object
  }
})


</script>

<style scoped>

</style>