/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  /* hack so that we can test ourselves, only really and ember-cli-babel thing */
  var super$addonInstalled = EmberApp.prototype._addonInstalled;

  EmberApp.prototype._addonInstalled = function(addonName) {
    if (addonName === 'ember-cli-babel') {
      return true;
    } else{
      return super$addonInstalled.call(this, addonName);
    }
  };
  /* end hack */

  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true
    }
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
