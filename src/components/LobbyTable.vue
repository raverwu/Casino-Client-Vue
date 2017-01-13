<template>
    <div class="main">
        <div class="row">
            <div class="inline head">{{table.table_id}}</div>
            <div class="inline info-box"> <span class="info-box-icon bg-red">庄</span> <span class="info-box-number">{{table.banker_win_count || 0 }}</span></div>
            <div class="inline info-box"><span class="info-box-icon bg-blue">闲</span> <span class="info-box-number">{{table.player_win_count || 0 }}</span></div>
            <div class="inline info-box"> <span class="info-box-icon bg-green">和</span> <span class="info-box-number">{{ tie_win_count || 0 }}</span></div>
            <div class="inline info-box"> <span class="info-box-number">{{ table.chip_limit_time || 0 }}</span></div>
        </div>
        <lobby-table-result class="result" :results="results"></lobby-table-result>
        <!--<lobby-table-canvas :table_id="table.table_id"></lobby-table-canvas>-->
        <div :class="['status', status_text_css]">{{ status_text }}</div>
        <div :class="['trapezoid', vip_hidden_css]">VIP包台中</div>
    </div>

</template>

<script>
import {signalrEmitter} from '../constants/events'
import * as commands from '../constants/commands'
import * as status from '../constants/status'
import LobbyTableResult from './LobbyTableResult'
import LobbyTableCanvas from './LobbyTableCanvas'



let vm = {
  name: 'lobby-table',
  data () {
    return {
        status_text: "　　　"
    };
  },
  props: {
      table: {
          type: Object,
          required: true
      }
  },
//   watch: {
//       table: function(){
//           console.log('watch table ---------')
//       }
//   },
  computed: {
      tie_win_count(){
        //   data.table_id = this.table.table_id
        //   console.log('----------' + this.table.tie_win_count)
          return this.table.tie_win_count;
      },
      results(){
          return this.table.road.split(";");
      },
      status_text_css(){
        //   console.log(this.table.table_id + "--- stauts: " + this.table.game_status)
          switch(this.table.game_status){
              case status.Break:
                this.status_text="休息中"
                return "status_text_show";

              case status.Pause:
                this.status_text="暫停中"
                return "status_text_show";

            case status.Shuffle:
                this.status_text="洗牌中"
                return "status_text_show";

              default:
                this.status_text="　　　"
                return "";
          }

          this.status_text="　　　"
          return "";
      },
      vip_hidden_css(){
          if(this.table.vip_reserved){
              return "";
          }
          else{
              return "vip_hidden";
          }
      }
  },
  components: {
      LobbyTableResult,
      LobbyTableCanvas
  },
  created: function(){
    //   console.log('--- create -----' + this.table_id)

  }
}

export default vm;


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        border-style: solid;
        border-width: 3px;
        border-color: saddlebrown;
        margin: -10px 2px 2px 2px;
        height: 180px;
        /*width: 47%;*/
        width: 590px;
        border-top-left-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 1);
    }
    
    .row {
        margin-top: 3px;
        position: relative;
        left: -40px;
        top: 5px;
    }
    
    .inline {
        display: inline-block
    }
    
    .head {
        background: #fff;
        width: 15%;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        align-self: center;
        line-height: 30px;
    }
    
    .info-box {
        display: inline-block;
        min-height: 30px;
        background: #fff;
        width: 15%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-bottom: 15px;
    }
    
    .info-box-icon {
        border-top-left-radius: 2px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 2px;
        display: block;
        float: left;
        height: 30px;
        width: 30px;
        text-align: center;
        color: white;
        font-size: 20px;
        font-weight: bold;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.2);
    }
    /*.bg-red {
        background-color: red !important;
    }
    
    .bg-blue {
        background-color: dodgerblue !important;
    }
    
    .bg-green {
        background-color: mediumseagreen !important;
    }*/
    
    .info-box-number {
        display: block;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        align-self: center;
        line-height: 30px;
    }
    
    .status {
        display: block;
        font-weight: bold;
        font-size: 35px;
        font-family: Microsoft JhengHei, Arial, Helvetica, sans-serif;
        position: relative;
        top: -85px;
        color: transparent;
        height: 0;
    }
    
    .status_text_show {
        text-shadow: 3px 3px 5px #000000;
        color: red;
    }
    
    .trapezoid {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        width: 80px;
        height: 0;
        border: 51px solid rgba(0, 0, 0, 0);
        border-top: 0 solid;
        border-right: 17px solid rgba(0, 0, 0, 0);
        border-bottom: 30px solid dodgerblue;
        font: normal 100%/normal Arial, Helvetica, sans-serif;
        color: white;
        -o-text-overflow: clip;
        text-overflow: clip;
        -ms-transform: rotate(30deg);
        /* IE 9 */
        -webkit-transform: rotate(30deg);
        /* Chrome, Safari, Opera */
        transform: rotate(30deg);
        line-height: 30px;
        font-family: Microsoft JhengHei, Arial, Helvetica, sans-serif;
        font-weight: bold;
        position: relative;
        top: -162px;
        /*right: -452px;*/
        left: 455px;
    }

    .vip_hidden {
        color: transparent;
        border-bottom: 30px solid transparent;
    }
</style>