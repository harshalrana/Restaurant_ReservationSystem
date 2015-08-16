/**
 * Created by Harshal on 8/11/2015.
 */
(function(){
    'use strict';

    angular
        .module('RestuarantReservationSystem')
        .controller('assignTableCtlr',assignTableController);


    function assignTableController(){
        var assignVm = this;
        console.log('assign table');
    }


})();