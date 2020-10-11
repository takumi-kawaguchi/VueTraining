new Vue({
    el: '#event',
    data: {
        message: '',
        path: 'http://www.web-deli.com/image/linkbanner_l.gif',
        image: './image.jpg'
    },
    methods: {
        onclick: function() {
            this.message = new Date().toLocaleString();
        },
        onmouseenter: function() {
            this.path = 'http://www.web-deli.com/image/home_chara.gif';
        },
        onmouseleave: function() {
            this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
        },
        onerror: function() {
            this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
        }
    }
});