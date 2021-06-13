import menuItem from '../templates/product.hbs';
import menuList from '../menu.json';

const menu = document.querySelector('ul.js-menu');

function insertMenuItems(object) {
  return object.map(menuItem).join('');
}

const menuItems = insertMenuItems(menuList);

menu.insertAdjacentHTML('beforeend', menuItems);
