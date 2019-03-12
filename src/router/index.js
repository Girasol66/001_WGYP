import Vue from 'vue'
import Router from 'vue-router'
import InfoBind from '@/pages/InfoBind/InfoBind'
import UserQuery from '@/pages/user/UserQuery'
import PrescriptionQuery from '@/pages/PrescriptionQuery/PrescriptionQuery'
import Result from '@/pages/result/Result'
import Success from '@/components/Success'
import Fail from '@/components/Fail'
import QrCode from '@/pages/qrcode/QrCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'PrescriptionQuery'
    },
    {
      path: '/InfoBind',
      name: 'InfoBind',
      component: InfoBind
    },
    {
      path: '/UserQuery',
      name: 'UserQuery',
      component: UserQuery
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
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    },
    {
      path: '/Fail',
      name: 'Fail',
      component: Fail
    },
    {
      path: '/QrCode',
      name: 'QrCode',
      component: QrCode
    }
  ]
})
