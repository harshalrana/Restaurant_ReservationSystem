/**
 * Created by Harshal on 8/11/2015.
 */

(function(){
    'use strict';

    angular
        .module('RestuarantReservationSystem')
        .controller('reservationDetailsCtlr',ReservationDetailsController);

    
    function ReservationDetailsController($routeParams,$http){
        var rDetailsVm = this;
 
        init();
        
        function init(){
       	 $http({
       		 method: 'GET',
       	     url: 'http://localhost:8080/RestuarantReservationApp/api/reservationlist/get/' + $routeParams.code
       	     
       	 })
       	 .success(function(data){
       		 console.log(data);
       		rDetailsVm.rDetails = data;
       	 })
       	 .error(function(err){
       		 console.log(err);
       	 })
       	 
        }
       
     
        
    }


})();