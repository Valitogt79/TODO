import usersStore from './store/users-store';
import { renderTable } from './presentetion/render-table/render-table';
import { reenderButtons } from './presentetion/render-buttons/reder-buttons';
import { renderAddButton } from './presentetion/render-add-button/render-add-button';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {

  element.innerHTML =  'Loading...';
  await usersStore.loadNextPage();
  element.innerHTML =  '';
  renderTable( element );
  reenderButtons( element );
  renderAddButton( element );
};
