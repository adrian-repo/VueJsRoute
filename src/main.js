// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router';
import App from './App'
import PostsPage from './components/PostsPage'
import HomePage from './components/HomePage'

Vue.use(VueRouter);
Vue.use(vueResource)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
      {path:'/', component: HomePage},
      {path:'/posts', component: PostsPage},
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// render: h => h(App) is shorthand for:
// render: function (createElement) {
//     return createElement(App);
// }