$(function() {


    $.ajax({
        url: "sketchbooks/titles.php",
        async: false,
        success: function (response){
                 sketchbooks = JSON.parse(response)
        }
    });



    new Vue({
        el: '#app',
        data: {
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
