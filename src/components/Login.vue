<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" placeholder="name" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="email address" />
        <button>create</button>
        <p class="message">Already registered? <a href="#" @click="toggle">Sign In</a></p>
      </form>
      <form class="login-form" @submit.prevent="login">
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
        <button id="login_btn">login</button>
        <!--<p class="message">Not registered? <a href="#" @click="toggle" >Create an account</a></p>-->
        <p class="error_message" v-if="!loginResult">帳號或密碼錯誤</p>
      </form>
    </div>
  </div>
</template>

<script>
import {signalrEmitter} from '../constants/events'
import * as commands from '../constants/commands'
import {login} from "../actions/actions"

let data = {
  loginResult : true
}

let isLoginFromHere = false;

signalrEmitter.on("serverResponse", (command, json)=>{
    // console.log('request')
    switch(command){
      case commands.RESPONSE_LOGIN:
        if(isLoginFromHere)
          data.loginResult = json.result == 1;
        break;
    }
    
});

export default {
  name: 'login',
  data () {
    return data
  },
  methods: {
      toggle: function(){
          $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      },
      login: () => {
        sessionStorage.setItem("username", $('#username').val());
        sessionStorage.setItem("password", $('#password').val());
        isLoginFromHere = true;
        login();
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);
  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  
  .form button:hover,
  .form button:active,
  .form button:focus {
    background: #43A047;
  }
  
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  
  form .error_message {
    margin: 15px 0 0;
    color: #EF3B3A;
    font-size: 12px;
  }
  
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  .form .register-form {
    display: none;
  }
  
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .container:before,
  .container:after {
    content: "";
    display: block;
    clear: both;
  }
  
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  
  .container .info span .fa {
    color: #EF3B3A;
  }
  
  body {
    background: #76b852;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #76b852, #8DC26F);
    background: -moz-linear-gradient(right, #76b852, #8DC26F);
    background: -o-linear-gradient(right, #76b852, #8DC26F);
    background: linear-gradient(to left, #76b852, #8DC26F);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>