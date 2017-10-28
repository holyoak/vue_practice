import accounts from './vuex'

const data = [
  {
    key: 'Checking',
    info: {
      balance: 10,
      available: 10
    }
  },
  {
    key: 'Savings',
    info: {
      balance: 20,
      available: 15
    }
  }
]

export default function (story, message) {
  switch (message) {
    case ('Accounts recived'):
      console.log(JSON.stringify(accounts.actions))
      story.commit('LOAD_ACCOUNTS', data)
      break
    default:
      const error = 'App actions switch failed'
      console.error(error)
      return (error)
  }
}
