Vue.directive('highlight', {
    bind: function(el, binding, vnode, oldValue) {
        el.style.backgroundColor = binding.value;
    }
});

new Vue({
    el: '#app',
    data: {
        color: 'yellow'
    }
});