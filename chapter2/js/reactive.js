let app = new Vue({
    el: '#reactive',
    data: {
        current: new Date()
    },
    created: function() {
        let that = this;
        this.timer = setInterval(function() {
            that.current = new Date();
        }, 1000);
    }
});