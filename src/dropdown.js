export default function Dropdown(menuItem, dropdownContent) {
    const showDropdown = () => dropdownContent.classList.add('visible');
    const hideDropdown = () => dropdownContent.classList.remove('visible');
  
    menuItem.addEventListener('mouseenter', showDropdown);
    menuItem.addEventListener('mouseleave', hideDropdown);
    dropdownContent.addEventListener('mouseenter', showDropdown);
    dropdownContent.addEventListener('mouseleave', hideDropdown);
  }
  