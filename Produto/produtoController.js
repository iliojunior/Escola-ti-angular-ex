(function () {

    'use strict';

    var app = angular
        .module('app');

    app.controller('ProdutosController', ProdutosController);

    var produtosTeste = [
        {
            codigo: 1,
            nome: '1',
            preco: 1,
            estoque: 1
        },
        {
            codigo: 2,
            nome: '2',
            preco: 2,
            estoque: 2
        },
    ];

    var produtos = produtosTeste;

    function ProdutosController() {
        this.products = produtos;
        this.produtoEditavel = {};

        this.save = function () {
            this.products.push(this.produtoEditavel);
            this.produtoEditavel = {};
        };

        this.edit = function (produto) {
            this.produtoEditavel = produto;
        };

        this.delete = function (produto) {
            produtos = produtos.filter(function (element) {
                return (element !== produto);
            });
            this.products = produtos;
        };
    }

})();