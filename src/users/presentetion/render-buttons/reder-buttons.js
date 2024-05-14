import usersStore from '../../store/users-store'
import './render-buttons.css'
import { renderTable } from '../render-table/render-table';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const reenderButtons = (element) => {
  
  // Creando los botones para la conpaginacion 
  const nextButton = document.createElement('button');
  nextButton.innerHTML = 'Next >';

  const prevButton = document.createElement('button');
  prevButton.innerHTML = '< Prev ';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page'
  currentPageLabel.innerText = usersStore.getCurrentPage();


  //Añayendo al elemento 
  element.append(prevButton, currentPageLabel, nextButton);

  nextButton.addEventListener('click', async() => {
    await usersStore.loadNextPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });
  
  prevButton.addEventListener('click', async() => {
    await usersStore.loadPreviousPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  })
}
