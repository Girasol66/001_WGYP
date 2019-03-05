import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InfoBind from '@/pages/InfoBind/InfoBind'
import PrescriptionQuery from '@/pages/PrescriptionQuery/PrescriptionQuery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'PrescriptionQuery'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/InfoBind',
      name: 'InfoBind',
      component: InfoBind
    },
    {
      path: '/PrescriptionQuery',
      name: 'PrescriptionQuery',
      component: PrescriptionQuery
    }
  ]
})
