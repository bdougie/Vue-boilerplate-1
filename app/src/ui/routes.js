'use strict';

var routes = {
  '/': {
    componentId: 'mHome',
    isDefault: true
  },
  '/contact': {
    componentId: 'mContact'
  },
  options: {
    hashbang: true,
    click: false
  }
};

module.exports = routes;