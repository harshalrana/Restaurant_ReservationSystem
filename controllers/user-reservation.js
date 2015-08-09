(function(){
    'use strict';

    angular
        .module('RestuarantReservationSystem')
        .controller('GuestReservationCtlr',GuestReservationController);


    function GuestReservationController(){
        var guestVm = this;
        console.log('Guest reservation');
    }




})();