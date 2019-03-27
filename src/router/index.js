import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/pages/test/post'
import InfoBind from '@/pages/InfoBind/InfoBind'
import PrescriptionQuery from '@/pages/PrescriptionQuery/PrescriptionQuery'
import Result from '@/pages/result/Result'
import Success from '@/components/Success'
import Fail from '@/components/Fail'
import QrCode from '@/pages/qrcode/QrCode'
import About from '@/pages/home/about'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'InfoBind'
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
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
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
