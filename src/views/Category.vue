<template>
    <div class="content">
        <div class="page-title">
            {{category.name}}
        </div>

        <div class="img-list row">
            <div class="col-lg-4 col-md-6">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in columns[0]" :key="index" >
                            <img  v-lazy="'./portfolio/'+category.name+'/'+(n)+'.jpg'" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 ">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in columns[1]" :key="index" >
                        <img  v-lazy="'./portfolio/'+category.name+'/'+(n)+'.jpg'" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in columns[2]" :key="index" >
                        <img  v-lazy="'./portfolio/'+category.name+'/'+(n)+'.jpg'" alt="">
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

    //Fonction de séparation du tableau en N parts
    function chunkify(a, n) {

        a = a.sort(function() { return 0.5 - Math.random() });

        if (n < 2)
            return [a];

        var len = a.length,
            out = [],
            i = 0,
            size;

        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }

        else{
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }


        return out;
    }

    //Fonction de création du tableau [1,..N]
    function createNumbersArray (max){
        return Array.from(new Array(max),(val,index)=>index+1);
    }


export default {
    beforeCreate() {
      var self=this;

      this.category = {}; 3
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
              self.columns = chunkify(createNumbersArray(self.category.count),3);
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
            box-shadow: 0px 0px 20px #0000000d;
        }
    }
</style>