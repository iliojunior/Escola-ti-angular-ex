(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('PedidosController', ['$scope', PedidosController]);

    var pedidosTeste = [
        {
            codigo: 1,
            emissao: 123,
            total: 330.75
        },
        {
            codigo: 2,
            emisao: 234,
            total: 12.33
        }
    ];

    var pedidos = pedidosTeste;
    function PedidosController($scope){
        $scope.requests = pedidos;
        $scope.novoPedido = {};
        $scope.titleRequest = "Novo Pedido";

        $scope.save = function(){
            $scope.requests.push($scope.novoPedido);

            $scope.novoPedido = {};
        };

        $scope.details = function(){

        };
    }


});