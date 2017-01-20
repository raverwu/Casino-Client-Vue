import { EventEmitter } from 'events'
import { login } from "../actions/actions"

// class MyEmitter extends EventEmitter {}

export const signalrEmitter = new EventEmitter();

let signalrState = "normal"

let signalrDisconnected = () => {
    console.log("========  disconnected ==========")
    setTimeout(function () { 
        signalrState = "reconnect"
        startConnect()
     }, 1000);
}

var ConnectionStarted = false;

// var connection = $.hubConnection("http://192.168.5.192:7700/signalr", { useDefaultPath: false });
var connection = $.hubConnection("http://sky.hakkas.me:7700/signalr", { useDefaultPath: false });
connection.error(function (error) {
    console.log('==============SignalR error: ' + error)
});
connection.connectionSlow(function () {
    console.log("========  connection slow ==========")
});
connection.disconnected(signalrDisconnected);
connection.reconnecting(function () {
    console.log("========  reconnecting ==========")
});

//connection.qs = { 'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6InRlc3QiLCJzdWIiOiJ0ZXN0Iiwicm9sZSI6WyJNYW5hZ2VyMCIsIlN1cGVydmlzb3IiXSwiaXNzIjoiaHR0cDovL2p3dGF1dGh6c3J2LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiMDk5MTUzYzI2MjUxNDliYzhlY2IzZTg1ZTAzZjAwMjIiLCJleHAiOjE0NzExNDg4NzEsIm5iZiI6MTQ2ODU1Njg3MX0.qMxoDgDMUjfqNQBACtiwOLmzYNtY5Amt9sP4DgHkguw' }

// Declare a proxy to reference the hub.
var chat = connection.createHubProxy('casinoHub');
console.log('create hub');

chat.on('serverResponse', function (command, json) {
    //console.log('server response: ' + command);
    // console.log(json);
    signalrEmitter.emit('serverResponse', command, json);

});

var requestServer = (command, json) => {
    if (ConnectionStarted == false) {
        console.log('Connection is not started.');
        setTimeout(function () { requestServer(command, json) }, 1000);
        return;
    }
    console.log('request server: ' + command);
    // console.log(json);
    chat.invoke("requestServer", command, json)
        .fail(function (error) {
            console.log('requestServer error: ' + error)
        });
};

signalrEmitter.on('requestServer', requestServer);

var startConnect = () => {
    console.log('start connect:' + signalrState);

    connection.start()
        .done(
        function () {
            console.log('Now connected, connection ID=' + connection.id);
            ConnectionStarted = true;
            login();
        })
        .fail(function () { console.log('SignalR could not connect'); });
};


startConnect()
