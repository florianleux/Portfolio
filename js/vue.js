$(function() {

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li> {{todo.text}}</li>'

    })

    $.ajax("sketchbooks/titles.php")
        .done(function (response){
            console.log("coucou");
            console.log(response);
        })
    ;


    new Vue({
        el: '#app',
        data: {
            message : 'coucou',
            groceryList : [
                {
                    id : 0,
                    text: "fromage"
                },
                {
                    id : 2,
                    text: "red"
                }
            ]
        }
    });
    console.log("couou");



});
