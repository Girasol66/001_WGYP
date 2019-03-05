import Vue from 'vue'
import Router from 'vue-router'
import InfoBind from '@/pages/InfoBind/InfoBind'
import PrescriptionQuery from '@/pages/PrescriptionQuery/PrescriptionQuery'
import Result from '@/pages/result/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Result'
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
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    }
  ]
})
