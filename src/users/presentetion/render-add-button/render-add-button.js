import './render-add-button.css'


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element, callback) => {
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');

  // Agregandolo al HTML
  element.appendChild(fabButton);

  //TODO:
  fabButton.addEventListener('click', () => {
    throw new Error('No Implementado');
  });
};