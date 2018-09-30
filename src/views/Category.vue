

<template>
    <div class="content">

        <div class="page-title">
            {{category.name}}
        </div>

        <div class="img-list row">
            <!--<div class="col-sm-6 col-md-4 col-lg-3 " v-for="(n, index) in category.count" :key="index" >-->
                <!--<img :src="'./portfolio/'+category.name+'/'+(index+1)+'.jpg'" alt="">-->
            <!--</div>-->
            <div class="col-lg-4 col-md-6">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in tiersList(1,category.count)" :key="index" >
                        <section v-scroll-reveal>
                            <img :src="'./portfolio/'+category.name+'/'+(n)+'.jpg'" alt="">
                        </section>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 ">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in tiersList(2,category.count)" :key="index" >
                        <section v-scroll-reveal>
                            <img :src="'./portfolio/'+category.name+'/'+(n)+'.jpg'" alt="">
                        </section>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-6 " v-for="(n, index) in tiersList(3,category.count)" :key="index" >
                        <section v-scroll-reveal>
                            <img :src="'./portfolio/'+category.name+'/'+(n)+'.jpg'" alt="">
                        </section>
                    </div>
                </div>
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
    methods: {
        tiersList: function (tier, number) {
            var tiers =[],i;

            for (i=1;i<=number;i++){
                if(i % 3 === 3-tier){
                    tiers.push(i);
                }
            }
            return tiers.sort(function() { return 0.5 - Math.random() });
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
        .img-item{
            padding: 15px;
        }
        img{
            max-width :100%;
        }
    }
</style>