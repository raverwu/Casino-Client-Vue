import { signalrEmitter } from '../constants/events'
import * as commands from '../constants/commands'

let login = () => {
    console.log('login-----------------------')
    signalrEmitter.emit('requestServer', commands.LOGIN, { username: sessionStorage.getItem("username"), password: sessionStorage.getItem("password") })
}







export { login };