$(function() {

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li> {{todo.text}}</li>'

    })

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



});
