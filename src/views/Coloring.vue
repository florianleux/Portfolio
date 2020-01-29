<template>
    <div class="sub-content">
        <div class="page-title">
           TOYSO'S COLORING PAGES
        </div>

        <div class="about-text text-center">
            <p>You will find below some of my inkings to print if you want some fun coloring pages.
            Just click on any drawings to print it !</p>

            <div class="subtitle">Disclaimer</div>

            <p>Of course, these drawings are free to use for <strong>PERSONAL USE ONLY</strong> ! Do not modify them or publish them without my authorization.</p>

            <p>If you have any questions please contact me on my social networks : @toysovore .</p>

        </div>

        <div v-bind:class="[{ 'selected': selectedImage }, 'img-list', 'row']">
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in columns[0]" :key="index">
                        <img @click="zoom('./coloring/'+(n)+'.jpg')"
                             v-lazy="'./coloring/'+(n)+'.jpg'"
                             title="© 2018 Toysovore All Rights Reserved" alt="Illutration by Toysovore">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-6" v-for="(n, index) in columns[1]" :key="index">
                        <img @click="zoom('./coloring/'+(n)+'.jpg')"
                             v-lazy="'./coloring/'+(n)+'.jpg'"
                             title="© 2018 Toysovore All Rights Reserved" alt="Illutration by Toysovore">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-6" v-for="(n, index) in columns[2]" :key="index">
                        <img @click="zoom('./coloring/'+(n)+'.jpg')"
                             v-lazy="'./coloring/'+(n)+'.jpg'"
                             title="© 2018 Toysovore All Rights Reserved" alt="Illutration by Toysovore">
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <div v-if="selectedImage" class="modal-backdrop" @click.stop="selectedImage = null">
                <div id="zoomedImage" class="zoom-modal">
                    <img  :src="selectedImage" alt=""/>
                    <button class="print" @click.stop="print"> <i class="fa fa-print"></i> PRINT ME !</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import jQuery from 'jquery'

    let $ = jQuery

    var folder;

    //Fonction de séparation du tableau en N parts
    function chunkify(a, n) {

        a = a.sort(function () {
            return 0.5 - Math.random()
        });

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
        } else {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }

        return out;
    }

    //Fonction de création du tableau [1,..N]
    function createNumbersArray(max) {
        return Array.from(new Array(max), (val, index) => index + 1);
    }


    export default {
        data() {
            return {
                selectedImage: null,
            }
        },
        methods: {
            zoom(url) {
                this.selectedImage = url;
            },

            print(){
                // Pass the element id here
                this.$htmlToPaper('zoomedImage');
            }
        },

        beforeCreate() {
            var self = this;
            this.coloring = {};


            // En Dev , redirection des requetes vers le serveur Apache
            if (process.env.NODE_ENV === 'development') {
                folder = 'api';
            } else {
                folder = 'php';
            }

            $.post({
                url: "/" + folder + "/coloring.php",
                async: false,
                success: function (response) {
                    self.coloring.count = Number(response);
                    self.columns = chunkify(createNumbersArray(self.coloring.count), 3);
                }
            });
        }
    }
</script>

<style lang="scss">
    
    .zoom-modal{
        position: relative;
    }

    button.print{
        text-decoration: none;
        position: absolute;
        bottom: 30px;
        display: block;
        text-align: center;
        font-size: 16px;
        left: 50%;
        margin-left: -78px;
        padding: 5px 25px;
        border: 1px solid #000;
        border-radius: 15px;
        background: #fff;
        color: #000;

        &:hover, &:active{
            color:#d20b10;
            border-color:#d20b10;
        }
    }

    @page {
        size:210mm 297mm;
        margin: 0;
    }

</style>