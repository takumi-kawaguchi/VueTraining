Vue.component('my-hello', {
    props: {
        yourName: {
            type: String,
            required: true,
            validator: function(value) {
                return value.length <= 5;
            }
        }
    },
    template: `<div>hello, {{ yourName }}</div>`
});

new Vue({
    el: '#app'
});