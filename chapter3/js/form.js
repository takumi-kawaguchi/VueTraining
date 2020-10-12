new Vue({
    el: '#app',
    data: {
        myName: 'anonymous',
        pet: 'dog',
        agree: true,
        os: ['Windows', 'MacOS'],
        fav: '',
        unit: {}
    },
    methods: {
        onchange: function() {
            console.log(this.unit.name + ':' + this.unit.size);
        }
    }
});