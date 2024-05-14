

import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/users';


/**
 * 
 * @param {String|Number} id 
 * @returns { Promise<User>}
 */


export const getUserById = async( id ) => {
  
  //url para realizar la petición
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
  const res = await fetch( url );
  const data = await res.json();
  // console.log(data);
  
  const user = localhostUserToModel(data);
  return user;
};