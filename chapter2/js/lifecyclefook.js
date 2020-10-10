let app = new Vue({
    el: '#lifecycle',
    beforeCreate: function() {
        console.log('before create');
    },
    created: function() {
        console.log('after created');
    },
    beforeMount: function() {
        console.log('before mount');
    },
    mounted: function() {
        console.log('after mounted');
    },
    beforeUpdate: function() {
        console.log('before update');
    },
    updated: function() {
        console.log('after updated');
    },
    beforeDestroy: function() {
        console.log('before destroy');
    },
    destroyed: function() {
        console.log('after destroyed');
    }
});

setTimeout(function() {
    app.$destroy();
}, 3000);