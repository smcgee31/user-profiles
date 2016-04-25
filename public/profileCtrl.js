angular.module('userProfiles')
.controller('profileCtrl', function($scope, userInfo) {
	$scope.currentUser =  userInfo.data.currentUser.name;  // WHY THE .data PART??? and the last .name part???
	$scope.friends =  userInfo.data.friends; //  <--  SAME
});
