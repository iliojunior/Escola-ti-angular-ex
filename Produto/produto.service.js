(function () {

    'use strict';

    var app = angular.module('app');

    app.factory('produtoService', ProdutoService);

    function ProdutoService() {
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

        function get() {
            return produtos;
        }

        function add(produto) {
            produtos.push(produto);
        }

        function exist(produto) {
            var exists = false;

            get().forEach(function (item) {
                if (item === produto)
                    exists = true;
            });

            return exists;
        }

        function remove(produto) {

            var index = get().indexOf(produto);

            if(index != -1)
                get().splice(index,1);
        }

        var factory = {
            get: get,
            add: add,
            remove: remove,
            exist: exist
        };

        return factory;
    }

})();