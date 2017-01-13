<template>
    <div class="wrapper">
        <normal-result class="inline-block" :results="results"></normal-result>
        <!--<normal-result class="inline-block"></normal-result>-->
        <!--<div>{{results.join(" ")}}</div>-->
    </div>

</template>

<script>
import {signalrEmitter} from '../constants/events'
import * as commands from '../constants/commands'
import NormalResult from './NormalResult'



export default {
  name: 'lobby-table-result',
  data () {
    return {}
  },
  props: {
      results: Array
  },
  watch: {
      results: function(newVal){
        //   console.log("results changes =----------" + newVal.join("-"))
      }
  },
  components: {
      NormalResult
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        height: 120px;
        width: 100%;
        margin: 1px;
    }
    
    .inline-block {
        display: inline-block;
        margin: -3px;
    }
</style>