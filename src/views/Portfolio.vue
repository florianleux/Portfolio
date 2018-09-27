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

var categories;

    $.ajax({
        url: "php/categories.php",
        async: false,
        success: function (response){
            console.log(response);
            categories = JSON.parse(response)
        }
    });

    console.log(categories);

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
