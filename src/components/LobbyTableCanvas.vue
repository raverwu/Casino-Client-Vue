<template>
    <div class="wrapper">
        <canvas @click="draw" width="500" height="120" :id="table_id + 'canvas'">
            CANVAS
        </canvas>
    </div>

</template>

<script>
import * as commands from '../constants/commands'
// import NormalResult from './NormalResult'



export default {
  name: 'lobby-table-canvas',
  data () {
    return {}
  },
  props: {
      table_id: String
  },
  watch: {
      results: function(newVal){
        //   console.log("results changes =----------" + newVal.join("-"))
      }
  },
  components: {
    //   NormalResult
  },
  methods: {
      draw: ()=>{
          console.log("----- DRAW --------")
      }
  },
  created: function(){
    this.draw()
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
    
    canvas {
        border: 1px solid black;
    }
</style>