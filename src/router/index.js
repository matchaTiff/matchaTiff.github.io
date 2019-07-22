import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Resume from '@/components/pages/Resume'
// import Contact from '@/components/pages/Contact'

import BBG from '@/components/projects/BBG'
import BP from '@/components/projects/BP'
import FO from '@/components/projects/FO'
import IJAG from '@/components/projects/IJAG'
import RGC from '@/components/projects/RGC'
import SCV from '@/components/projects/SCV'

Vue.use(Router)

export default new Router({
  routes: [
    //pages
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // },


    // projects
    {
      path: '/built-by-girls',
      name: 'BBG',
      component: BBG
    },
    {
      path: '/bubble-in-paradise',
      name: 'BP',
      component: BP
    },
    {
      path: '/fireside-open',
      name: 'FO',
      component: FO
    },
    {
      path: '/its-just-a-game',
      name: 'IJAG',
      component: IJAG
    },
    {
      path: '/rhythm-games-club',
      name: 'RGC',
      component: RGC
    },
    {
      path: '/the-scarlet-classic-v',
      name: 'SCV',
      component: SCV
    },
  ]
})
