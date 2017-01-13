<template>
  <div>
    <p>LOBBY</p>
    <lobby-table v-for="table in tables" :key="table.table_id" :table="table" :ttt="table.tie_win_count" class="floating-box"></lobby-table>
  </div>

</template>

<script>
import LobbyTable from './LobbyTable'
import {signalrEmitter} from '../constants/events'
import * as commands from '../constants/commands'

let data = {
  tables: []
}

let _tables = {}

signalrEmitter.on("serverResponse", (command, json)=>{
    switch(command){
      case commands.RESPONSE_ALL_TABLES:
        
        for(var i in json.tables){
          // console.log(t)
          _tables[json.tables[i].table_id] = json.tables[i]
          json.tables[i]['tie_win_count'] = 0
          json.tables[i]['player_win_count'] = 0
          json.tables[i]['banker_win_count'] = 0
          json.tables[i]['road'] = ""
          json.tables[i]['game_status'] = 0
          signalrEmitter.emit('requestServer', commands.SUBSCRIB_SINGLE_TABLE, { table_id: json.tables[i].table_id })
        }
        data.tables = json.tables
        // console.log(_tables)
        // signalrEmitter.emit('requestServer', commands.SUBSCRIB_SINGLE_TABLE, { table_id: 101 })
        break;
      case commands.RESPONSE_SINGLE_TABLE:
        if(_tables[json.table_id]){
          _tables[json.table_id].banker_win_count = json.banker_win_count
          _tables[json.table_id].player_win_count = json.player_win_count
          _tables[json.table_id].tie_win_count = json.tie_win_count
          _tables[json.table_id].road = json.road
          _tables[json.table_id].game_status = json.game_status
          _tables[json.table_id].vip_reserved = json.vip_reserved
          // console.log('-----bbbb----' + _tables[json.table_id].tie_win_count)
        }
        break;
      case commands.SEND_TABLE_COUNTDOWN:
        if(_tables[json.table_id]){
          _tables[json.table_id].chip_limit_time = json.countdown
        }
        break;
    }
    
});

export default {
  name: 'lobby',
  data () {
    return data
  },
  components: {
      LobbyTable
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .floating-box {
    display: inline-block;
    position: relative;
    top: 15px;
    /*width: 45%;
    height: 50%;*/
    /*margin: 10px;
    border: 3px solid #73AD21;*/
  }
</style>