import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Test from './components/Test'
import Home from './components/Home'
import Lobby from './components/Lobby'
import { signalrEmitter } from './constants/events'
import * as commands from './constants/commands'

// install router
Vue.use(VueRouter)
const routes = [
  { path: '/hello', component: Hello },
  { path: '/test', component: Test },
  { path: '/', component: Home },
  { path: '/lobby', component: Lobby, name: 'lobby' }
]
const router = new VueRouter({
  routes // short for routes: routes
})

router.afterEach((to, from) => {
  console.log('afterEach to: ' + to.name + '[' + to.path + ']')
  if (to.name == 'lobby') {
    signalrEmitter.emit('requestServer', commands.REQUEST_ALL_TABLES, {})
  }
})

signalrEmitter.on("serverResponse", (command, json) => {
  // console.log('main.js serverResponse');
  switch (command) {
    case commands.RESPONSE_LOGIN:
      if (json.result == 1) {
        console.log("--- login success ---")
        if (router.currentRoute.name == "lobby") {  //斷線重連後重新登入成功
          signalrEmitter.emit('requestServer', commands.REQUEST_ALL_TABLES, {})
        }
        else {
          router.push("lobby")
        }
        //signalrEmitter.emit('requestServer', commands.REQUEST_ALL_TABLES, { })
      } else {
        router.push("/")
      }
      break;
  }
});

const app = new Vue({
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')

// router.push("test")



