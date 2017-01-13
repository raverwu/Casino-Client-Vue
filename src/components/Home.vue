<template>
  <div class="login">
      <login></login>
  </div>
</template>

<script>
import Login from './Login'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
      Login
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    position: absolute;
    right: 30px
}
</style>
