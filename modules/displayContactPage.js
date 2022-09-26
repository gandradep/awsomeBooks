const listPage = document.getElementById('listPage');
const contactPage = document.getElementById('contactPage');
const addPage = document.getElementById('addPage');
const contactLink = document.getElementById('contactLink');

contactLink.addEventListener('click', () => {
  addPage.classList = 'displayNone';
  listPage.classList = 'displayNone';
  contactPage.classList = 'displayBlock';
});
