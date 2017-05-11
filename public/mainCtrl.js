angular.module('myApp')
.controller('mainCtrl', function($scope, productService, cartService) {
  $scope.products = productService.getProducts();

  $scope.addToCart = function(product) {
    console.log(`Going to service with ${product.name}`)
    cartService.addToCart(product).then(function() {
      // Get the latest cart from the server. It has been updated.
      cartService.getCart().then(function(res) {
        $scope.cart = res.data;
      })
    })
  }

  cartService.getCart().then(function(res) {
    console.log(res);
    $scope.cart = res.data;
  })
})