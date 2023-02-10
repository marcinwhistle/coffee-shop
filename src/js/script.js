import { classNames, select, settings } from './settings.js';
import Product from './components/Product.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
  },
  initData: function () {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    console.log(url);
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
  },

  initMenu: function () {
    const thisApp = this;

    console.log('thisApp.data:', thisApp.data.products);
    for (let productData of thisApp.data.products) {
      new Product(productData);
    }
  },
  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
  },
};

app.init();
