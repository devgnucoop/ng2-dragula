/// <reference path="../typings/main.d.ts"/>

import {enableProdMode} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'prod') {
  enableProdMode();
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import {ExampleApp} from './app/example-app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(ExampleApp, [
    ...ENV_PROVIDERS
  ])
  .catch(err => console.error(err));
});
