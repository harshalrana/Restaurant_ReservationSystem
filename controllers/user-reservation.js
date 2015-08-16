(function(){
    'use strict';

    angular
        .module('RestuarantReservationSystem')
        .controller('GuestReservationCtlr',GuestReservationController);



    function GuestReservationController($route){
        var guestVm = this;
        console.log('Guest reservation');
    }




})();