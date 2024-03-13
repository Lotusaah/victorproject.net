//code for nav bar
//open side bar
document.querySelector('.js-menu').addEventListener('click', () => {
  showSideBar();
})
function showSideBar() {
  const sidebar = document.querySelector('.sideBar');
  sidebar.style.display = 'flex';
}
//close side bar
document.querySelector('.js-close').addEventListener('click', () => {
  hideSideBar();
})
function hideSideBar() {
  const sidebar = document.querySelector('.sideBar');
  sidebar.style.display = 'none';
}