/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {hello} from './app/hello';
<% if (router === 'uirouter') { -%>
import 'angular-ui-router';
import routesConfig from './routes';
<% } -%>

<% if (modules === 'webpack') { -%>
import './index.<%- css %>';

<% } -%>
export const app: string = 'app';

angular
  .module(app, [<% if (router === 'uirouter') { -%>'ui.router'<% } -%><% if (router === 'router') { -%>'ngComponentRouter'<% } -%>])
<% if (router === 'uirouter') { -%>
  .config(routesConfig)
<% } -%>
  .component('app', hello);
<% if (modules === 'systemjs') { -%>

angular.bootstrap(document, ['app']);
<% } -%>