

/**
 * 
 * @param {Number} page 
 * @returns
 */


export const loadUsersbypage = async( page=1 ) => {
  
  //url para realizar la petición
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
  const res = await fetch( url );
  const data = await res.json();

  console.log(data);
};