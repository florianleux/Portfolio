<template>
  <div class="sub-content">
    <div class="subtitle">
      <a href="https://www.instagram.com/toysovore/?hl=fr" target="_blank">Instagram</a>
    </div>

    <vue-instagram :token="token" username="toysovore" :count="8" class="feed-container row">
      <template slot="feeds" slot-scope="props">
          <div class="col-lg-3 col-md-4 col-6 post-container ">
            <a :href="props.feed.link" target="_blank" class="post-link">
              <img :src=" props.feed.images.standard_resolution.url " alt="" class="post">
            </a>
            <div class="post-description"> {{props.feed.caption.text }}</div>
          </div>
      </template>

      <template slot="error" slot-scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
      </template>
    </vue-instagram>
  </div>
</template>

<script>
    import VueInstagram from 'vue-instagram'
    var PartA="Mjc0MjM0NTU2LjE2NzdlZDAuMTk0ZTE4NW",
        PartB="RhYWU1NDkzYThiOWQ1NTI0YmI0MDA5MWQ=";

export default {
    components: {
        VueInstagram
    },
    data: function(){
        return {
            token : atob(PartA + PartB)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{font-family: 'Quick Sand';  }

  .post-container{
    padding: 10px;
    margin-bottom:10px;
  }
.post{
  max-width:100%;
}
  .feed-container{
    padding: 0 50px;
  }  .post-description{
    font-size: 12px;
    padding-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
