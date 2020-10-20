Vue.component('banner-member', {
    template: `<div class="member">
        <h3>WINGSメンバー募集中</h3>
        <p>ここから飛べるよ</p>
    </div>`
});

Vue.component('banner-new', {
    template: `<div class="member">
        <h3>新刊発売中</h3>
        <p>ここから飛べるよ</p>
    </div>`
});

Vue.component('banner-env', {
    template: `<div class="member">
        <h3>環境セッティング</h3>
        <p>ここから飛べるよ</p>
    </div>`
});

new Vue({
    el: '#app',
    created: function() {
        let that = this;
        this.interval = setInterval(function() {
            that.current = (that.current + 1) % that.components.length;
        }, 3000);
    },
    beforeDestroy: function() {
        clearInterval(this.interval);
    },
    computed: {
        currentBanner: function() {
            return 'banner-' + this.components[this.current];
        }
    },
    data: {
        current: 0,
        components: [ 'member', 'new', 'env' ]
    }
});