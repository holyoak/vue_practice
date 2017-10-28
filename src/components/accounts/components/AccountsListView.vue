<template>
  <div id="accounts-list-view">
    List of accounts
    <ul>
      <li v-for="account, key in accounts">
        {{ account.key }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'accounts-list-view',

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
