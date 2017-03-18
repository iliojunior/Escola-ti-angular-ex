(function () {

    'use strict';

    var app = angular
        .module('app');

    app.controller('ProdutosController', ['$scope', '$mdDialog', 'produtoService', ProdutosController]);

    const TITLE_DEFAULT = 'Novo Produto';

    function ProdutosController($scope, $mdDialog, produtoService) {

        $scope.init = function () {
            $scope.products = produtoService.get();
            $scope.produtoEditavel = {};

            $scope.titleProduto = TITLE_DEFAULT;
        };

        $scope.save = function (produto) {
            var exists = produtoService.exist(produto);

            if (!exists)
                produtoService.add(produto);

            $scope.init();
        };

        $scope.edit = function (produto) {
            $scope.titleProduto = produto.nome;
            $scope.produtoEditavel = produto;
        };

        $scope.delete = function (produto) {

            var confirm = $mdDialog.confirm()
                .title('Deseja realmente apagar \'' + produto.nome + '\' ?')
                .textContent('Esta operação não poderá ser revertida.')
                .ariaLabel('Apagar')
                .targetEvent($scope.$event)
                .ok('SIM')
                .cancel('NÃO');

            $mdDialog.show(confirm).then(function () {
                produtoService.remove(produto);

                var alert = $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Sucesso')
                    .textContent('Produto foi apagado com sucesso!')
                    .ariaLabel('Apagado')
                    .ok('OK')
                    .targetEvent($scope.$event);

                $mdDialog.show(alert);

            }, function () {

            });

        };

        $scope.init();
    }

})();