import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // children:[
      //   {
      //     path:'/test',
      //     name:'test',
      //     component:test
      //   }
      // ]
    },
    
  ]
})
