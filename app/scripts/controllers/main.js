'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope) {
    var rootRef = new Firebase('https://sweltering-fire-8239.firebaseio.com/');
    var childRef = rootRef.child('message');

    $scope.setMessage = function() {
    	childRef('message').set({
    		user: 'Jeff',
    		text: 'Yo Holmes!'
    	});
    };
	$scope.updateMessage = function(){
		childRef.update({
			text: 'Scantiness'
		});
	};
	$scope.deleteMessage = function(){
		childRef.remove();
	}
  });
