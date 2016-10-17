(function () {
'use strict';

angular.module('assign1', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope'];
function DIController($scope) {
  $scope.message='';
  $scope.detectItems = function(){
    if($scope.items){
      var itemsArray = $scope.items.split(',');
      console.log(itemsArray);
      if(itemsArray.length>3)
        $scope.message = "Too Much!";
      else if (itemsArray.length<=3)
        $scope.message = "Enjoy!";
      if(itemsArray.length < 1)
        $scope.message = 'Please enter some data';

    }
    else {
      $scope.message="Please enter some data";
    }


  };
}
})();
