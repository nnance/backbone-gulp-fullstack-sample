/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap'
    }
});

require([
    'backbone',
    'views/app'
], function (Backbone, AppView) {
    var app = new AppView();
    Backbone.history.start();
});
