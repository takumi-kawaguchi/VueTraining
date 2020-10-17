new Vue({
    el: '#app',
    data: {
        message: '<img src="https://wings.msn.to/image/wings.jpg">',
        name: 'Alice',
        result: '-'
    },
    methods: {
        onsubmit: function(e) {
            if (!confirm('送信しても良いですか？')) {
                e.preventDefault();
                return;
            }
        },
        onclick: function(e) {
            this.result = Math.floor(Math.random() * 100) + 1;
        }
    }
});