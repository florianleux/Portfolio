

<template>
    <div class="content">

        <div class="page-title">
            {{category.name}}
        </div>

        <div class="img-list row">
            <div class="col-sm-6 col-md-4 col-lg-3 " v-for="(n, index) in category.count" :key="index" >
                <img :src="'./portfolio/'+category.name+'/'+(index+1)+'.jpg'" alt="">
            </div>
        </div>
    </div>


</template>

<script>

    import jQuery from 'jquery'
    let $ = jQuery

    var folder;


export default {
  data() {
      return {
      }
  },

    beforeCreate() {
      var self=this;
      this.category = {};


      this.category.name = this.$route.params.category;


      // En Dev , redirection des requetes vers le serveur Apache
      if (process.env.NODE_ENV === 'development'){
          folder = 'api';
      }else{
          folder = 'php';
      }

      $.post({
          url: "/"+folder+"/categories.php",
          async : false,
          data: { category: this.category.name, method: "getCategoryCount" },
          success: function (response){
              self.category.count = Number(response);

          }
      });
  }
}
</script>

<style lang="scss">

    .img-list{
        img{
            max-width :100%;
        }
    }

</style>