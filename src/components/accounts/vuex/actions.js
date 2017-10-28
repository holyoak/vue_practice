// import { guid } from '../../../utils';
// import { removeAccount, saveAccount, fetchAccounts } from '../api';
export const loadAccounts = ({ commit }, data) => {
  commit('LOAD_ACCOUNTS', data)
  console.log('Loading accounts...')
}
