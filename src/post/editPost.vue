<template>
  <div class="mx-3">
    <form>
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input class="form-control" v-model="form.title">
        <div  class="form-text">{{form.errortitle}}</div>
      </div>
      <div class="mb-3">
        <label  class="form-label">Body</label>
        <textarea class="form-control" rows="5" v-model="form.body"></textarea>
        <div  class="form-text">{{form.erorrbody}}</div>
      </div>

      <button @click.prevent="validate" class="btn btn-dark">
        <div v-if="loading" class="spinner-border  spinner-border-sm  " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        Update
      </button>
    </form>
  </div>
</template>



<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import Swal from 'sweetalert2'


const route = useRoute()
const loading = ref(false)
const form =reactive({
  title:"",
  body:"",
  errortitle:"",
  erorrbody:"",
})

function getposts  (){
  axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then(function (response) {
        // handle success

        form.title = response.data.title
        form.body = response.data.body


        loading.value = false
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

getposts()




function validate(){
  if (form.title === ""){
    form.errortitle = "require"
  }else {
    form.errortitle = ""
  }
  if (form.body === ""){
    form.erorrbody = "require"
  }else {
    form.erorrbody = ""
  }

  if (form.title!=="" && form.body!==""){
    loading.value= true
    createPost()
  }
}

function createPost  (){
  axios.post('https://jsonplaceholder.typicode.com/posts',{
    title :form.title,
    body : form.body,
  })
      .then(function (response) {
        // handle success
        loading.value=false
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'You  are success',
    showConfirmButton: false,
    timer: 1500
  })


}



</script>

<style scoped>

</style>