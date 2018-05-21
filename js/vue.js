$(function() {

    var sketchbooks;

    $.ajax({
        url: "sketchbooks/titles.php",
        async: false,
        success: function (response){
                 sketchbooks = JSON.parse(response)
        }
    });

    var data = { showHelp: true }
    Vue.component('modal', {
        // déclarer les props
        props: ['itemSelected'],
        data: function () {
            return data
        },
        // tout comme un élément de `data`, une prop peut être utilisée à l'intérieur de templates
        // et est également disponible dans l'instance via `this.message`
        template: '#modal-template',
        mounted: function(){
            var flipbook = $("#flipbook").turn({
                width: ((Math.max(document.documentElement.clientHeight, window.innerHeight || 0))-200)*1.51845,
                height: (Math.max(document.documentElement.clientHeight, window.innerHeight || 0))-200,
                autoCenter: true,
                duration: 1000,
            });
            
            document.onkeydown = function(e) {

                switch (e.keyCode) {
                    case 38:
                        e.preventDefault();
                        flipbook.turn("next");
                        break;
                    case 39:
                        e.preventDefault();
                        flipbook.turn("next");
                        break;
                    case 37:
                        e.preventDefault();
                        flipbook.turn("previous");
                        break;
                    case 40:
                        e.preventDefault();
                        flipbook.turn("previous");
                        break;

                }
            };
        }
    });

    new Vue({
        el: '#app',
        data: {
            sketchbooks : sketchbooks,
            itemSelected: [],
            showModal : false,
        },
        methods: {
            select: function(item) {
                this.itemSelected = item;
                this.showModal = true
            },
            closeModal: function(){
                this.showModal = false;
            }

        }
    });





});
