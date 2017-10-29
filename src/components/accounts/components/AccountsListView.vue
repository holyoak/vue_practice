<template>
  <div id="accounts-list-view">
    List of accounts
    <md-layout>
      <account-item
        v-for="account in accounts"
        v-bind="account"
        v-bind:key="account.key"
      ></account-item>
    </md-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import accountItem from './Account'

export default {
  name: 'accounts-list-view',

  components: {
    accountItem
  },

  data () {
    return {}
  },

  methods: {
    ...mapActions([
      'loadAccounts'
    ])
  },

  computed: {
    ...mapState({
      'accounts': state => state.accounts.accounts
    })
  }
}
</script>

<style scoped>

</style>
