const listPage = document.getElementById('listPage');
const contactPage = document.getElementById('contactPage');
export const addPage = document.getElementById('addPage');
const addLink = document.getElementById('addLink');

addLink.addEventListener('click', () => {
  addPage.classList = 'displayBlock';
  listPage.classList = 'displayNone';
  contactPage.classList = 'displayNone';
});
