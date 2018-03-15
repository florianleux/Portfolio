window.onload=function() {

    Vue.component('todo-item', {
        template: '<li>Ceci est une liste</li>'
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
            message: 'Hello Vue.js!'
        }
    });
    console.log("couou");



}
