window.onload=function() {

    Vue.component('todo-item', {
        template: '<li>Ceci est une liste</li>'
    })

    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    });



}
