<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <h1>Hello App!</h1>-->
    <div id="header"></div>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->
      <!--<router-link to="/hello">Hello</router-link>
      <router-link to="/test">Test</router-link>-->
    </p>

    <!--<hello></hello>-->
    <!--<test></test>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'
// import Test from './components/Test'
import Home from './components/Home'
// import Lobby from './components/Lobby'

// import {signalrEmitter} from './constants/events'
// console.log(signalrEmitter);
// signalrEmitter.on('event', () => {
//   console.log('an event occurred!');
//   alert('an event occurred!')
// });

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// const routes = [
//   { path: '/hello', component: Hello },
//   { path: '/test', component: Test }
// ]
// const router = new VueRouter({
//   routes // short for routes: routes
// })


export default {
  name: 'app',
  components: {
    // Hello,
    // Test,
    Home
  }
}
</script>

<style>
  #app {
    font-family: Microsoft JhengHei, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  
  #header {
    background-color: #f60;
    height: 24px;
    position: relative;
  }
  
  .bg-red {
    background-color: red !important;
  }
  
  .bg-blue {
    background-color: dodgerblue !important;
  }
  
  .bg-green {
    background-color: mediumseagreen !important;
  }
  
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>