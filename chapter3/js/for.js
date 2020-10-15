new Vue({
    el: '#app',
    data: {
        books: [
            {
                isbn: '1',
                title: 'JavaScript',
                price: 2000
            },
            {
                isbn: '2',
                title: 'C#',
                price: 3000
            },
            {
                isbn: '3',
                title: 'shellscript',
                price: 4000
            }
        ],
        book: {
            isbn: '2',
            title: 'C#',
            price: 3000
        }
    },
    computed: {
        expensiveBooks: function() {
            return this.books.filter(function(b) {
                return b.price >= 2500;
            });
        }
    }
});