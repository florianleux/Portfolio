<template>
  <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import jQuery from 'jquery'
let $ = jQuery

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

var categories,folder ;

     // En Dev , redirection des requetes vers le serveur Apache
    if (process.env.NODE_ENV === 'development'){
        folder = 'api';
    }else{
        folder = 'php';
    }

    $.ajax({
        url: "/"+folder+"/categories.php",
        async: false,
        success: function (response){
            console.log(response);
            categories = JSON.parse(response)
        }
    });


export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
