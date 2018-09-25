$(function() {


    $.ajax({
        url: "sketchbooks/categories.php",
        async: false,
        success: function (response){
                 categories = JSON.parse(response)
        }
    });



    new Vue({
        el: '#app',
        data: {
            categories : categories
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
