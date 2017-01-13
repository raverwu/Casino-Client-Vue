<template>
    <div class="outer" v-if="active">

        <div :class="['circle', color]">

            <span class="inner_text">{{result_text}}</span>


        </div>
        <div :class="['banker_pair', bankerPairShow]"></div>
        <div :class="['player_pair', playerPairShow]"></div>
    </div>
</template>

<script>

export default {
  name: 'result-content',
  data () {
    return {
        color: "bg-green",
        result_text: "",
        active: false,
        bankerPairShow: "",
        playerPairShow: false,
    }
  },
  components: {
      
  },
  props: {
      result: String
  },
  watch: {
      result: function(newVal){
        //   console.log('get result: ' + newVal)
          this.active = false;
          if(!newVal)
            return;
          this.active = true;
          try{
          let r = newVal.split("|");
          switch(r[0]){
              case "1":
                this.result_text="庄"
                this.color="bg-red"
                break;
              case "2":
                this.result_text="闲"
                this.color="bg-blue"
                break;
              case "3":
                this.result_text="和"
                this.color="bg-green"
                break;
              default:
                this.active=false
                break;
          }

          this.bankerPairShow="transparent"
          this.playerPairShow="transparent"

          switch(r[1]){
              case "1": //庄對
                this.bankerPairShow = "bg-red"
                break;
              case "2": //閒對
                this.playerPairShow = "bg-blue"
                break;
              case "3": //莊閒對
                this.bankerPairShow = "bg-red"
                this.playerPairShow = "bg-blue"
                break;
          }
          }
          catch(err){
              console.log("watch result error: " + err)
          }
      }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .outer {
        border: 0px solid black;
        height: 18px;
        width: 18px;
        max-width: 18px;
        max-height: 18px;
        margin: 0px;
        overflow: hidden;
        /*margin: -10px 0px -10px 0px;*/
    }
    
    .circle {
        width: 16px;
        height: 16px;
        display: table;
        /*vertical-align: middle;*/
        border-radius: 8px;
        /*margin: 0px 0px -7px 0px;*/
        /*padding: -5px;*/
        /*text-align: center;*/
        /*line-height: 12px;*/
        position: relative;
        top: 2px;
        left: 1px;
    }
    
    .inner_text {
        display: table-cell;
        vertical-align: middle;
        color: white;
        font-size: 10px;
        font-weight: bold;
        /*position: relative;
        top: -2px;
        left: 0px;*/
        /*margin: 0px 0px -17px 0px;*/
    }
    
    .banker_pair {
        border: 0.1px solid white;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        position: relative;
        top: -16px;
        left: 0px;
    }
    
    .player_pair {
        border: 0.1px solid white;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        position: relative;
        right: -13px;
        bottom: 9px;
    }
    
    .transparent {
        border: 0px;
        background: transparent;
    }
</style>