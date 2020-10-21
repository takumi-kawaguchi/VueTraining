Vue.directive('highlight', function(el, binding, vnode, oldValue) {
    console.log(binding.value);
    el.style.backgroundColor = binding.value;
});

new Vue({
    el: '#app',
    data: {
        name: 'no name',
        color: 'yellow'
    }
});