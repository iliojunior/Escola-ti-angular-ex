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
            var exists = false;

            produtos.forEach(function (item) {
                if (item === $scope.produtoEditavel)
                    exists = true;
            });

            if (!exists)
                $scope.products.push($scope.produtoEditavel);

            $scope.produtoEditavel = {};
        };

        $scope.edit = function (produto) {
            console.debug(produto);

            $scope.produtoEditavel = produto;
            console.debug($scope.produtoEditavel);
        };

        $scope.delete = function (produto) {
            produtos = produtos.filter(function (element) {
                return (element !== produto);
            });
            $scope.products = produtos;
        };
    }

})();