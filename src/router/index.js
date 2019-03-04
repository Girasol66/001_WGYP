import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InfoBind from '@/pages/InfoBind/InfoBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/InfoBind',
      name: 'InfoBind',
      component: InfoBind
    }
  ]
})
