<template>
  <div>
    <md-layout class="header">
      <div>Icon</div>
      <div class="title">{ account.key }</div>
      <div>Settings</div>
    </md-layout>
    <md-layout>
      <md-layout md-column>
        <div class="labels">
          <b>Asset</b>
        </div>
        <ul>
          <div v-for="balance in account.balances">
            <div>{{ balance.asset }}</div>
          </div>
        </ul>
      </md-layout>
      <md-layout md-column>
        <div class="labels">
          <b>Balance</b>
        </div>
        <ul>
          <div v-for="balance in account.balances">
            <div>{{ balance.balance }}</div>
          </div>
        </ul>
      </md-layout>
      <md-layout md-column>
        <div class="labels">
          <b>Available</b>
        </div>
        <ul>
          <div v-for="balance in account.balances">
            <div>{{ balance.available }}</div>
          </div>
        </ul>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  props: ['account'],

  created () {
    console.log(this.account)
  },

  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  flex-flow: nowrap;
  justify-content: space-between;
}
.title{
  flex: 1;
}
</style>
