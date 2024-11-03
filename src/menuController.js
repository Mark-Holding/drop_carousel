import Dropdown from './dropdown';

export default function MenuController() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(menuItem => {
    const dropdownContent = document.querySelector(`.dropdown[data-menu="${menuItem.dataset.menu}"]`);
    Dropdown(menuItem, dropdownContent);
  });
}
