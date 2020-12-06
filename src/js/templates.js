import itemsTemplate from '../templates/gallery-items.hbs';
import dishes from '../menu.json';
const menuRef = document.querySelector('.js-menu');
const listВishes = itemsTemplate(dishes);
menuRef.insertAdjacentHTML('beforeend', listВishes);
console.log(itemsTemplate)

