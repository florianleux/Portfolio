$(function() {

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li> {{todo.text}}</li>'

    })

    var sketchbooks;

    $.ajax({
        url: "sketchbooks/titles.php",
        async: false,
        success: function (response){
             sketchbooks = JSON.parse(response)
        }
    });

    console.log(sketchbooks);



    new Vue({
        el: '#app',
        data: {
            sketchbooks : sketchbooks
        }
    });



});
