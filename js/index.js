var votersApp = angular.module ('votersApp', []);

votersApp.controller('indexController', function indexController($scope, $http) {
    $scope.lignode = "liskwallet.punkrock.me"
    $scope.address = ""
    $scope.addressToCompare = ""

    // $scope.checkDiff =  function() => {
    //     if($scope.addressToCompare == "" && $scope.address == "") {
    //
    //     } else {
    //         console.log($scope.address, $scope.addressToCompare)
    //     }
    // }
});