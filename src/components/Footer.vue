<template>
   <footer>
       <div class="row">
           <div class="col-12 col-sm-6">
               <img class="logo" width="70" src="./../assets/sceau.png" alt="Logo Toysovore">
           </div>
           <div class="social-zone col-12 col-sm-6">
               <div class="row">
                   <div class="col-3 social-link">
                       <a title="Follow me on Instagram" href="https://www.instagram.com/toysovore" target="_blank">
                           <i class="fab fa-instagram"></i>
                       </a>
                   </div>
                   <div class="col-3 social-link">
                       <a title="Twitter" href="https://twitter.com/toysovore" target="_blank">
                           <i class="fab fa-twitter"></i>
                       </a>
                   </div>
                   <div class="col-3 social-link">
                       <a title="My Youtube Channel" href="https://www.youtube.com/channel/UCMdI8V_a3MWTKoqWRpvMQZw" target="_blank">
                           <i class="fab fa-youtube"></i>
                       </a>
                   </div>
                   <div class="col-3 social-link">
                       <a title="Join me on Twitch !" href="https://www.twitch.tv/toysovore" target="_blank">
                           <i class="fab fa-twitch"></i>
                       </a>
                   </div>
               </div>

           </div>
       </div>
       <div class="row">
           <div class="credits left col-6">
               Developed by <strong>Florian Leux</strong>
           </div>
           <div class="credits right  col-6">
               Powered by <strong>VueJS</strong>
           </div>
       </div>

   </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .social-link{
        text-align:right;
        font-size: 3em;
        line-height: 70px;
        a{
            color:#b5b5b5;
            &:hover{
                color:#d20b10;
            }
        }
    }

    .credits{
        font-family: "Quick Sand";
        font-size : 0.7em;
        padding-top:10px;

        &.right{
            text-align: right;
        }
    }
    .logo{
        display: block;
    }
    footer{
        padding: 50px 0 20px 0;
    }
</style>
