angular.module('angularCalc')
.controller('mainCtrl', function($scope){
	$scope.num1 = null;
	$scope.operator = null;
	$scope.num2 = null;
	$scope.result = 0;

	$scope.Calculate = function(){
		//Addition
		if($scope.operator === '+'){
			if($scope.num1 && $scope.num2){
				$scope.result = parseInt($scope.num1) + parseInt($scope.num2);
			}
			else{
				alert("Please enter numbers in both fields");
			}
		}
		//Subtraction
		if($scope.operator === '-'){
			if($scope.num1 && $scope.num2){
				$scope.result = parseInt($scope.num1) - parseInt($scope.num2);
			}
			else{
				alert("Please enter numbers in both fields");
			}
		}
		//Multiplication
		if($scope.operator === '*'){
			if($scope.num1 && $scope.num2){
				$scope.result = parseInt($scope.num1) * parseInt($scope.num2);
			}
			else{
				alert("Please enter numbers in both fields");
			}
		}
		//Division
		if($scope.operator === '/'){
			if($scope.num1 && $scope.num2){
				$scope.result = parseInt($scope.num1) / parseInt($scope.num2);
			}
			else{
				alert("Please enter numbers in both fields");
			}
		}
		//Null
		if(!$scope.operator){
			alert("Select an operator");
		}
	}

	$scope.Clear = function(){
		$scope.num1 = null;
		$scope.operator = null;
		$scope.num2 = null;
		$scope.result = 0;
	}
})