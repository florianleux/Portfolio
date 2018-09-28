

<template>
  <div class="categories-list row">
    <div v-for="category in categories"  :key="category" class="category col-sm-3">
      {{ category.name }}
    </div>
  </div>
</template>

<script>

  import jQuery from 'jquery'
  let $ = jQuery

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
          categories = JSON.parse(response)
      }
  });

export default {
  data() {
      return {
        categories: categories
      }
  }
}
</script>
