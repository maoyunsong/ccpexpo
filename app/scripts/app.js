'use strict';

var page = require('page');
var log = require('./utils/log');

var HomePanel = require('./home');
var AboutPanel = require('./about');
var ContactPanel = require('./contact');

page('/', home);
page('/about', about);
page('/contact', contact);
page();

function home() {
  var homePanel = new HomePanel(document.querySelector('.main'));
}

function about() {
  var aboutPanel = new AboutPanel(document.querySelector('.main'));
}

function contact() {
  var contactPanel = new ContactPanel(document.querySelector('.main'));
}