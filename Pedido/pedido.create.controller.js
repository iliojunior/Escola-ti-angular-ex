(function () {

    'use strict';

    var app = angular.module('app');

    app.controller('PedidoCreateController', ['$scope', 'pedidoService', PedidoCreateController]);

    var itemsTeste = [
        {
            quantidade: 2,
            preco: 2.5,
            desconto: 2,
            total: 3,
            produto: 2
        },
        {
            quantidade: 2,
            preco: 3,
            desconto: 2,
            total: 4,
            produto: 1
        }
    ];

    function PedidoCreateController($scope, $pedido) {

        $scope.items = itemsTeste;

        function save(pedido) {

        }
    }

})();