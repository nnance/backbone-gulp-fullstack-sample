/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/nav',
    'views/footer'
], function ($, _, Backbone, NavView, FooterView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '.container',

        events: {},

        initialize: function () {
            this.nav = new NavView();
            this.container = new Backbone.View();
            this.footer = new FooterView();

            this.$el.append(this.nav.render().el);
            this.$el.append(this.container.render().el);
            this.$el.append(this.footer.render().el);
        },

        showView: function(view) {
            this.container.setView(view);
        }
    });

    return AppView;
});
