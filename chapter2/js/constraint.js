let app = new Vue({
    el: '#constraint',
    data: {
        author: {
            name: '山田'
        }
    },
    created: function() {
        let that = this;
        this.timer = setTimeout(function() {
            // that.author.name = 'yamada';
            Vue.set(that.author, 'company', 'WINGSプロジェクト');
        }, 3000);
    },
    beforeDestory: function() {
        clearInterval(this.timer);
    }
});