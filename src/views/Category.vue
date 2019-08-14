<template>
    <div class="content">
        <div class="page-title">
            {{category.name}}
        </div>

        <div v-bind:class="[{ 'selected': selectedImage }, 'img-list', 'row']">
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-12" v-for="(n, index) in columns[0]" :key="index">
                        <img @click="zoom('./portfolio/'+category.name+'/'+(n)+'.jpg')"
                             v-lazy="'./portfolio/'+category.name+'/'+(n)+'.jpg'"
                             title="© 2018 Toysovore All Rights Reserved" alt="Illutration by Toysovore">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-6" v-for="(n, index) in columns[1]" :key="index">
                        <img @click="zoom('./portfolio/'+category.name+'/'+(n)+'.jpg')"
                             v-lazy="'./portfolio/'+category.name+'/'+(n)+'.jpg'"
                             title="© 2018 Toysovore All Rights Reserved" alt="Illutration by Toysovore">
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="row">
                    <div class="img-item col-lg-12 col-md-6" v-for="(n, index) in columns[2]" :key="index">
                        <img @click="zoom('./portfolio/'+category.name+'/'+(n)+'.jpg')"
                             v-lazy="'./portfolio/'+category.name+'/'+(n)+'.jpg'"
                             title="© 2018 Toysovore All Rights Reserved" alt="Illutration by Toysovore">
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <div v-if="selectedImage" class="modal-backdrop" @click.stop="selectedImage = null">
                <div class="zoom-modal">
                    <img :src="selectedImage" alt=""/>
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
            }
        },
        beforeCreate() {
            var self = this;
            this.category = {};
            this.category.name = this.$route.params.category;

            // En Dev , redirection des requetes vers le serveur Apache
            if (process.env.NODE_ENV === 'development') {
                folder = 'api';
            } else {
                folder = 'php';
            }

            $.post({
                url: "/" + folder + "/categories.php",
                async: false,
                data: {category: this.category.name, method: "getCategoryCount"},
                success: function (response) {
                    self.category.count = Number(response);
                    self.columns = chunkify(createNumbersArray(self.category.count), 3);
                }
            });
        }
    }
</script>

<style lang="scss">

    .fade-enter-active {
        transition: opacity 1s
    }

    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }


    .img-list {
        .img-item {
            padding: 15px;
        }

        img {
            max-width: 100%;
            box-shadow: 0px 0px 20px #0000000d;

            &:hover {
                cursor: pointer;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
            }
        }

        &.selected {
            filter: blur(2px);
            -webkit-filter: blur(2px);
        }
    }

    .modal-backdrop {
        position: fixed;
        background: rgba(0, 0, 0, 0.65);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;

        &:hover {
            cursor: pointer;
        }
    }

    .zoom-modal {
        margin: 0 auto;
        height: 90%;
        max-width: 90%;
        display: inline-block;
        border-radius: 3px;
        margin-top: 4%;
        padding: 1%;

        img {
            max-height: 100%;
            max-width: 100%;
            display: block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 3px;
            box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.4);
        }
    }
</style>