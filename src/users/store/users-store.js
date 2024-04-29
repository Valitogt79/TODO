import { loadUsersbypage } from '../use-cases/load-users-by-page';


 // Punto inicial del store
const state = {
  currentPage: 0,
  users: [],
};


//metodos

const loadNextPage = async() => {
  const users = await loadUsersbypage(state.currentPage + 1);
  if (users.length === 0) return;
  state.currentPage += 1;
  state.users = users;
}

const loadPreviousPage = async() => {
  throw new Error ('Not implemented');

}

const onUserChanged = () => {
  throw new Error ('Not implemented');
}

const reloadPage = async() => {
  throw new Error ('Not implemented');

}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  

  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   * 
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
}