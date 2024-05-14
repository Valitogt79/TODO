import usersStore from './store/users-store';
import { renderTable } from './presentetion/render-table/render-table';
import { reenderButtons } from './presentetion/render-buttons/reder-buttons';
import { renderAddButton } from './presentetion/render-add-button/render-add-button';
import { renderModal } from './presentetion/render-modal/render-modal';
import { saveUser } from './use-cases/save-user';

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
  renderModal(element, async ( userLike ) => {
    const user = await saveUser( userLike );
    usersStore.onUserChanged( user );
    renderTable( element );
  });
};
