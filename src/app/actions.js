const data = [
  {
    key: 'Wells Fargo',
    balances: [
      {
        asset: 'Checking',
        balance: 1000000.99,
        available: 10
      },
      {
        asset: 'Savings',
        balance: 10.12345678,
        available: 10.12345678
      },
      {
        asset: 'CDs',
        balance: 10,
        available: 5
      }
    ]
  }, {
    key: 'Chase',
    balances: [
      {
        asset: 'Checking',
        balance: 2000000.99,
        available: 10000.87
      },
      {
        asset: 'Savings',
        balance: 10.12345678,
        available: 10.12345678
      },
      {
        asset: 'CDs',
        balance: 10.0678,
        available: 5
      }
    ]
  }
]

export default function (store, message) {
  switch (message) {
    case ('Accounts recived'):
      store.commit('LOAD_ACCOUNTS', data)
      break
    default:
      const error = 'App actions switch failed'
      console.error(error)
      return (error)
  }
}
