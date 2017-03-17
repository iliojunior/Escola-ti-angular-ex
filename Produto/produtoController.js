(function () {

    'use strict';

    var app = angular
        .module('app');

    app.controller('ProdutosController', ['$scope', '$mdDialog', ProdutosController]);

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
    const TITLE_DEFAULT = 'Novo Produto';

    function ProdutosController($scope, $mdDialog) {

        $scope.init = function () {
            $scope.products = produtos;
            $scope.produtoEditavel = {};

            $scope.titleProduto = TITLE_DEFAULT;
        };

        $scope.save = function () {
            var exists = false;

            produtos.forEach(function (item) {
                if (item === $scope.produtoEditavel)
                    exists = true;
            });

            if (!exists)
                $scope.products.push($scope.produtoEditavel);

            $scope.init();
        };

        $scope.edit = function (produto) {
            $scope.titleProduto = produto.nome;
            $scope.produtoEditavel = produto;
        };

        var apagarProduto = function (produto) {
            produtos = produtos.filter(function (element) {
                return (element !== produto);
            });
            $scope.products = produtos;

            var alert = $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Sucesso')
                .textContent('Produto foi apagado com sucesso!')
                .ariaLabel('Apagado')
                .ok('OK')
                .targetEvent($scope.$event);

            $mdDialog.show(alert);

        };

        $scope.confirmDelete = function (produto) {
            var confirm = $mdDialog.confirm()
                .title('Deseja realmente apagar \'' + produto.nome + '\' ?')
                .textContent('Esta operação não poderá ser revertida.')
                .ariaLabel('Apagar')
                .targetEvent($scope.$event)
                .ok('SIM')
                .cancel('NÃO');

            $mdDialog.show(confirm).then(function () {
                apagarProduto(produto);
            }, function () {

            });
        };

        $scope.delete = function (produto) {

            $scope.confirmDelete(produto);

        };

        $scope.init();
    }

})();