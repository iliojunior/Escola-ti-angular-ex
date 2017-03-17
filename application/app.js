(function () {

    'use strict';

    var app = angular.module('app', []);

    app.controller('TabController', TabController);

    app.directive('productTab', productTab);

    function productTab() {
        return {
            restrict: 'E',
            templateUrl: 'Produto/produto.html'
        };
    }

    function TabController() {

        this.tab = 1;

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSelected = function (tab) {
            return (this.tab === tab);
        };
    }

})();