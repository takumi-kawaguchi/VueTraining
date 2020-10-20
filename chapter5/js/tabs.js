Vue.component('tab-member', {
    template: `<div class="tab">
        <p>WINGSプロジェクトメンバー募集</p>
    </div>`
});

Vue.component('tab-new', {
    template: `<div class="tab">
        <p>新刊出ました！</p>
    </div>`
});

Vue.component('tab-env', {
    template: `<div class="tab">
        <p>環境設定に関する問い合わせはこちら</p>
    </div>`
});

new Vue({
    el: '#app',
    methods: {
        onclick: function(tab) {
            this.current = tab;
        }
    },
    computed: {
        tabNames: function() {
            return Object.keys(this.tabs);
        },
        currentTab: function() {
            return 'tab-' + this.current;
        }
    },
    data: {
        current: 'member',
        tabs: {
            'member': 'メンバー募集',
            'new': '新刊紹介',
            'env': '環境設定'
        }
    }
});