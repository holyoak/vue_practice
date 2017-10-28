<template>
  <div id="app">
    <img src="../assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import actions from './actions'
console.log('this.$store is ' + this.$store)
/* eslint-disable no-undef */
actions(this.$store, 'Accounts recived')
//
//  Is this the right pace to put the socket connection?
//
// console.log('opening websocket connection')
// const socket = new WebSocket('ws://' + window.location.host + '/')
// socket.addEventListener('error', function (m) { console.log('error') })
// socket.addEventListener('open', function (m) {
//   socket.send('Open session')
//   console.log('websocket connection open')
// })
// socket.addEventListener('message', function (m) {
//   actions(message)
// })

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
