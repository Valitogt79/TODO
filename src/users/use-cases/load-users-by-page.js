import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/users';


/**
 * 
 * @param {Number} page 
 * @returns { Promise<User[]>}
 */


export const loadUsersbypage = async( page = 1 ) => {
  
  //url para realizar la petición
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
  const res = await fetch( url );
  const data = await res.json();
  // console.log(data);
  
  const users = data.map( localhostUserToModel );
  console.log( users );
  return users;
};