angular.module('app.controllers', [])
  
.controller('whoAreYouCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location) {
    $scope.location = $location;
}])
   
.controller('clientControlsCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location) {
    $scope.location = $location;
}])
   
.controller('stewardControlsCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location) {
    $scope.location = $location;
}])

.controller('stewardSettingsCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location){
    $scope.tableNumber = parseInt(window.localStorage.getItem("tableNumber")) || 1;

    $scope.save = function(){
        window.localStorage.setItem("tableNumber", $scope.tableNumber);
        $location.url('/steward');
    }

    $scope.location = $location;
}])
   
.controller('personalCodeCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location) {
    $scope.location = $location;
    
    var time = new Date().getTime();
    
    $("#qrcode").qrcode({
        render: "canvas",
        text: time.toString()
    });
}])
 