import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(data) {
    const thisProduct = this;

    thisProduct.data = data;

    console.log('new Product:', thisProduct);
    thisProduct.renderInMenu();
  }
  renderInMenu() {
    const thisProduct = this;

    /* generate HTML based on template */
    const generatedHTML = templates.productList(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const productContainer = document.querySelector(
      select.containerOf.productList
    );
    /* add element to menu */
    productContainer.appendChild(thisProduct.element);
  }
}

export default Product;
