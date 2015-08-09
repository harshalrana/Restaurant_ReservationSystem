
(function() {
    'use strict';

    angular
        .module('RestuarantReservationSystem', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/guests', {
                templateUrl: 'templates/guests-reservation.html',
                controller: 'GuestReservationCtlr',
                controllerAs: 'guestVm'
            })
            .when('/owner', {
                templateUrl: 'templates/owner-login.html',
                controller: 'OwnerLoginCtlr',
                controllerAs: 'ownerVm'
            })
            .when('/edit-reservation', {
                templateUrl: 'templates/edit-reservation.html',
                controller: 'EditReservationCtlr',
                controllerAs: 'editVm'
            })
            .when('/reservation-list', {
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
            .otherwise({
                redirectTo: ''
            });
    }


})();