new Vue({
    el: '#app',
    data: {
        message: '<img src="https://wings.msn.to/image/wings.jpg">',
        name: 'Alice'
    },
    methods: {
        onsubmit: function(e) {
            if (!confirm('送信しても良いですか？')) {
                e.preventDefault();
                return;
            }
        }
    }
});