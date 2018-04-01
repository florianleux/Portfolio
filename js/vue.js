$(function() {

    var sketchbooks;

    $.ajax({
        url: "sketchbooks/titles.php",
        async: false,
        success: function (response){
             sketchbooks = JSON.parse(response)
        }
    });

    Vue.component('modal', {
        // déclarer les props
        props: ['itemSelected'],
        // tout comme un élément de `data`, une prop peut être utilisée à l'intérieur de templates
        // et est également disponible dans l'instance via `this.message`
        template: '#modal-template'
    });

    new Vue({
        el: '#app',
        data: {
            sketchbooks : sketchbooks,
            itemSelected: [],
            showModal : false
        },
        methods: {
            select: function(item){
                this.itemSelected = item;
                this.showModal = true
            }

        }
    });





});
