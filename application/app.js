(function () {

    'use strict';

    var app = angular
        .module('app');

    app.controller('MainController', ['$scope', MainController]);

    function MainController($scope) {
        $scope.pedidoMenu = function ($mdMenu, ev) {
            $mdMenu.open(ev);
        }
    }

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/produtos', {
                controller: 'ProdutosController',
                templateUrl: 'Produto/produto.html',
                controllerAs: 'ProdutosCtrl'
            })
            .when('/pedidos', {
                controller: 'PedidosController',
                templateUrl: 'Pedido/pedido.html',
                controllerAs: 'PedidosCtrl'
            })
            .when('/pedido-create', {
                controller: 'PedidoCreateController',
                templateUrl: 'Pedido/pedido.create.html',
                controllerAs: 'PedidoCreateCtrl'
            })
            .otherwise({redirectTo: '/produtos'});

    }

    app.config(config);

})();