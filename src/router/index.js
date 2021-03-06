import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const User = {
  template: '<div>User</div>',
  watch: {
    '$route' (to, from) {
      console.log(from.path + '--->' + to.path);
    }
  }
}
export default  new Router({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})

