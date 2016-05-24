Package.describe({
  name: 'npm-packages',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('npm-packages.js');
});

Npm.depends({
  "lodash": "3.10.1",
  "meteor-node-stubs":"0.2.0",
  "react":"15.0.2",
  "react-addons-pure-render-mixin":"15.0.2",
  "react-dom": "15.0.2",
  "react-mixin": "3.0.5",
  "react-mounter": "1.2.0",
  "rebass":"0.2.6"
});
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('npm-packages');
  api.mainModule('npm-packages-tests.js');
});
