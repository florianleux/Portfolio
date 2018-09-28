

<template>
<div class="content">

  <div class="page-title">
    PORTFOLIO CATEGORIES
  </div>

  <div class="categories-list row">
    <router-link :to="'/portfolio/'+category.name" v-for="category in categories" :key="category.name" class="category col-sm-6 col-md-4">
      <img class="cover" :src="'./portfolio/'+category.name+'/cover.jpg'"/>
      <span class="title">{{ category.name }}</span>
    </router-link>
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

    $.post({
        url: "/"+folder+"/categories.php",
        data: {method: "getCategoriesList" },
        success: function (response){
            categories = JSON.parse(response);
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

<style lang="scss">

  .category{
    .cover{
      max-width: 100%;
      display: block;
      margin: auto;
      opacity: 0.5;
    }
    .title{
      display: block;
      text-transform: uppercase;
      font-size: 2em;
      text-align: center;
      text-shadow: 0px 3px 7px white;
      font-family: 'Quick Sand';
    }
  }

</style>