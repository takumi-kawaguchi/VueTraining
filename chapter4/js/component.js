let Myhello = {
    template: `<div>hello, Vue.js!</div>`
}

new Vue({
    el: '#app',
    components: {
        'my-hello': Myhello
    }
});