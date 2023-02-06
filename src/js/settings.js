export const select = {
  templateOf: {
    productList: '#template-product-list',
  },
  containerOf: {
    pages: '#pages',
    productList: '.product-container',
  },
  nav: {
    links: '.menu a',
  },
};
export const classNames = {
  pages: {
    active: 'active',
  },
};
export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};
export const templates = {
  productList: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
