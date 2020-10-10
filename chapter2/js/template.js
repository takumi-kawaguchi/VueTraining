let app = new Vue({
    el: '#app',
    data: {
        message: 'hello, world!',
        url: 'https://wings.msn.to/',
        flag: true,
        email: 'TestTestTest@example.com',
        current: new Date().toLocaleString()
    },
    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        },
        randomc: function() {
            return Math.random();
        }
    },
    methods: {
        onclick: function() {
            this.current = new Date().toLocaleString();
        },
        randomm: function() {
            return Math.random();
        }
    }
});