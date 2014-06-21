/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(Backbone.history, 'route', this.updateNavigation);
        },

        updateNavigation: function (router, route, params) {
        }
    });

    return NavView;
});
