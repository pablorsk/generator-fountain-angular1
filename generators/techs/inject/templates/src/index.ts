/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import './index.<%- css %>';

angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router'])
  .config(routesConfig);
<% } else if (router === 'router') { -%>
  .module('app', ['ngComponentRouter']);
<% } else { -%>
  .module('app', []);
<% } -%>
