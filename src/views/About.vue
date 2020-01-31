<template>
  <div class="content">
    <div class="about">
      <div class="page-title">Welcome !</div>
      <div class="sub-content">
        <div class="subtitle">
          About
        </div>
        <div class="row">
          <div class="col-lg-4 portrait">
            <img src="./../assets/portrait.png" alt="Toysovore Portrait">
          </div>
          <div class="col-lg-8 about-text">
            <p>I'm <strong>Toysovore</strong>, amateur illustrator from Bordeaux, France</p>
            <p>I love creating characters and environments, using both digital and traditional techniques. Recently, I focused on full-page illustrations made with Procreate on the Ipad Pro.</p>

            <br>
            <p>Looking for prints ? Here is <a href="https://society6.com/stormfr" target="_blank">my shop</a>.</p>

            <p><strong>Have a great tour in my portfolio !</strong></p>
          </div>
        </div>
      </div>
  </div>
    <InstagramFeed></InstagramFeed>
  </div>

</template>

<script>
    import InstagramFeed from '../components/InstagramFeed.vue'

    export default {
        components: {
            InstagramFeed,
        }
    }
</script>

<style lang="scss">
  .portrait{
    img{
      max-width: 300px;
      width: 100%;
      display: block;
      margin: auto;
    }
  }
  .about-text{
    font-family: 'Quick Sand';
    padding-top:30px;
    a{
      text-decoration: underline;
    }
  }
</style>