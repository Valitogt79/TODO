import { loadUsersbypage } from '../use-cases/load-users-by-page';


 // Punto inicial del store
const state = {
  currentPage: 0,
  users: [],
};


//metodos

const loadNextPage = async() => {
  await loadUsersbypage(state.currentPage + 1);

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
  
  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
}