(function () {

    'use strict';

    var app = angular
        .module('app');

    app.controller('ProdutosController', ProdutosController);

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

    function ProdutosController() {
        this.products = produtos;
        this.produtoEditavel = {};

        this.titleProduto = "Novo Produto";

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