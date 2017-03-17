(function () {

    'use strict';

    var app = angular
        .module('app');

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
                templateUrl: 'Pedido/pedido.html'
            })
            .otherwise({redirectTo: '/produtos'});

    }


    app.config(config);

})();