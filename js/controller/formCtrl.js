avaliacaoApp.controller('FormCtrl', function($scope){

	$scope.indexContact = 0;
	$scope.clickedEdit = false;

	$scope.contactList = [];

	$scope.clearFields = function (){
		$scope.name = undefined;
		$scope.email = undefined;
		$scope.phone = undefined;
	}

	$scope.reset = function (){
		$scope.clearFields();
		$scope.indexContact = 0;
		$scope.clickedEdit = false;
	}

	$scope.addContact = function (name, email, phone){

		if (name && email) {
			$scope.contactList.push({
				name : name,
				email : email,
				phone: phone
			});
			$scope.clearFields();		
		}		

	}

	$scope.editContact = function (data){

		$scope.indexContact = data;
		$scope.name = $scope.contactList[$scope.indexContact].name;
		$scope.email = $scope.contactList[$scope.indexContact].email;
		$scope.phone = $scope.contactList[$scope.indexContact].phone;

		$scope.clickedEdit = true;

	}

	$scope.saveContact = function (name, email, phone){

		var editObj = {};
		editObj = {
			name: name,
			email: email,
			phone: phone
		}

		$scope.contactList[$scope.indexContact] = editObj;

		$scope.reset();

	}

	$scope.deleteContact = function (data){
		$scope.contactList.splice(data, 1);
	}

	$scope.cancel = function (data){
		$scope.reset()
	}

});