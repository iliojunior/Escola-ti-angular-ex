(function () {

    'use strict';

    var app = angular.module('app');

    app.factory('pedidoService', PedidoService);



    function PedidoService() {
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
        var pedidosTeste = [
            {
                codigo: 1,
                emissao: 123,
                total: 250,
                items: itemsTeste
            },
            {
                codigo: 2,
                emissao: 559,
                total: 10,
                items: itemsTeste
            }
        ];

        var pedidos = pedidosTeste;

        function add(pedido) {
            this.pedidos.push(pedido);
        }

        function get() {
            return pedidos;
        }

        function exist(pedido) {
            return (get().indexOf(pedido) !== -1);
        }

        function remove(pedido) {
            var index = get().indexOf(pedido);

            if (index !== -1)
                get().splice(index, 1);
        }

        var factory = {
            add: add,
            get: get,
            remove: remove,
            exist: exist
        }

        return factory;

    }

})();