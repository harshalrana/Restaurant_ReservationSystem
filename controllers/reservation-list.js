/**
 * Created by Harshal on 8/9/2015.
 */

(function(){
    'use strict';

    angular
        .module('RestuarantReservationSystem')
        .controller('ReservationListCtlr',ReservationListController);

    ReservationListController.$inject = ['$http']
    function ReservationListController($http){
        var rlistVm = this;
        init();
        
     function init(){
    	 $http({
    		 method: 'GET',
    	     url: 'http://localhost:8080/RestuarantReservationApp/api/reservationlist/all'
    	 })
    	 .success(function(data){
    		 console.log(data);
    		 rlistVm.reservations = data;
    	 })
    	 .error(function(err){
    		 console.log(err);
    	 })
    	 
     }
    }


})();