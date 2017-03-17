(function () {

    'use strict';

    var app = angular
        .module('app');

    app.controller('ProdutosController', ['$scope', ProdutosController]);

    var produtosTeste = [
        {
            codigo: 1,
            nome: 'Paçoca',
            preco: 0.50,
            estoque: 10
        },
        {
            codigo: 2,
            nome: 'Tomate',
            preco: 2.50,
            estoque: 25
        },
    ];

    var produtos = produtosTeste;

    function ProdutosController($scope) {
        $scope.products = produtos;
        $scope.produtoEditavel = {};

        $scope.titleProduto = "Novo Produto";

        $scope.save = function () {
            $scope.products.push(this.produtoEditavel);
            $scope.produtoEditavel = {};
        };

        $scope.edit = function (produto) {
            produtos.forEach(function (item) {
                if (item === produto)
                    $scope.produtoEditavel = item;
            });

            console.debug(produto);
        };

        $scope.delete = function (produto) {
            produtos = produtos.filter(function (element) {
                return (element !== produto);
            });
            $scope.products = produtos;
        };
    }

})();