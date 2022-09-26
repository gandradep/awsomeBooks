
export const listPage = document.getElementById('listPage');
export const contactPage = document.getElementById('contactPage');
export const addPage = document.getElementById('addPage');
const listLink = document.getElementById('listLink');


listLink.addEventListener('click', () => {
  addPage.classList = 'displayNone';
  listPage.classList = 'displayBlock';
  contactPage.classList = 'displayNone';
});
