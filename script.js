
(function() {
    'use strict';

    angular
        .module('RestuarantReservationSystem', ['ngRoute','ngMessages'])
        .config(moduleConfig);

    angular.module('RestuarantReservationSystem').controller('MainController', MainControllerFn);



    function MainControllerFn($http) {
        var mainVm = this;
        mainVm.addReservation = function(isFormValid) {

        	if(isFormValid){
            mainVm.flag=1;
              console.log(mainVm.flag);
                $http({
                	method:'POST',
                	url:'http://localhost:8080/RestuarantReservationApp/api/reservationlist/add',
                	data:mainVm.newRev	
                })
                	 .success(function(data){
                		 console.log(data);
                		 mainVm.reservations = data; 
                		 
                	 })
                	 .error(function(err){
                		 console.log(err); 
            });
        }
        	else{
        		console.log('invalid form')}
        	}

    }
    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/reservation-list/', {
                templateUrl: 'templates/reservation-list.html',
                controller: 'ReservationListCtlr',
                controllerAs: 'rlistVm'
            })
            .when('/seating', {
                templateUrl: 'templates/seating-details.html',
                controller: 'SeatingDetailsCtlr',
                controllerAs: 'seatingVm'
            })
            .when('/profile', {
                templateUrl: 'templates/profile-details.html',
                controller: 'ProfileDetailsCtlr',
                controllerAs: 'profileVm'
            })
            .when('/contact', {
                templateUrl: 'templates/contact-details.html',
                controller: 'ContactDetailsCtlr',
                controllerAs: 'contactVm'
            })
            .when('/reservation-details/:code', {
                templateUrl: 'templates/reservation-details.html',
                controller: 'reservationDetailsCtlr',
                controllerAs: 'rDetailsVm'
            })
            .when('/assign-table', {
                templateUrl: 'templates/assign-table.html',
                controller: 'assignTableCtlr',
                controllerAs: 'assignVm'
            })
            .otherwise({
                redirectTo: '/reservation-list'
            });
    }


})();

function validate(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if ( username == "xyz@eatfresh.com" && password == "123"){
        window.location = "owner_master.html";
        return false;
    }

    else{
        alert ("Email or Password are incorrect");
        window.location = "index.html";
        return false;
    }
}