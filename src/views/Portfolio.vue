<template>
  <div class="sub-content">
    <div class="page-title">
      PORTFOLIO CATEGORIES
    </div>

    <div class="categories-list row">
      <router-link :to="'/portfolio/'+category.name" v-for="category in categories" :key="category.name" class="category col-sm-6 col-lg-4">
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

  export default {
    data() {
        return {
          categories: categories
        }
    },
      beforeCreate() {
          // En Dev , redirection des requetes vers le serveur Apache
          if (process.env.NODE_ENV === 'development'){
              folder = 'api';
          }else{
              folder = 'php';
          }

          $.post({
              url: "/"+folder+"/categories.php",
              data: {method: "getCategoriesList" },
              async: false,
              success: function (response){
                  categories = JSON.parse(response).sort(function() { return 0.5 - Math.random() });
              }
          });
      }
  }
</script>

<style lang="scss">
  .category{
    margin-bottom:50px;
    .cover{
      max-width: 100%;
      display: block;
      margin: 20px auto;
      box-shadow: 0px 0px 20px #0000000d;
      height: 280px;
      opacity : 0.7;
    }
    &:hover .cover{
      opacity:1;
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