new Vue({
    el: '#app',
    data: {
        name: 'anonymous',
        pos: {
            left: 0,
            top: 0
        },
        show: false
    },
    methods: {
        clear: function() {
            this.name = '';
        },
        help: function() {
            window.alert('set your name');
        },
        onleftclick: function() {
            this.show = false;
        },
        onrightclick: function(e) {
            this.pos = {
                top: e.pageY + 'px',
                left: e.pageX + 'px'
            };
            this.show = true;
        }
    }
});