new Vue({
    el: '#app',
    data: {
        list: [ 'red', 'blue', 'yellow' ]
    },
    methods: {
        onclick: function() {
            this.list.shift();
        }
    }
});