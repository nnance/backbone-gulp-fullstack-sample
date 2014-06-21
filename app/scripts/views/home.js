/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/home.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {}
    });

    return HomeView;
});
