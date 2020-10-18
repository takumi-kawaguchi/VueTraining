Vue.component('my-book', {
    data: function() {
        return {
            book: {
                isbn: '12345',
                title: 'HTML5 BASIC',
                price: 2000,
                publish: '日経BP'
            }
        }
    },
    template: `<div>
        <slot v-bind:book="book">{{ book.title }} ({{ book.publish }})</slot>
    </div>`
});

new Vue({
    el: '#app'
});