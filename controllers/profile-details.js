/**
 * Created by Harshal on 8/9/2015.
 */

(function(){
    'use strict';

    angular
        .module('RestuarantReservationSystem')
        .controller('ProfileDetailsCtlr',ProfileDetailsController)
      
    

    ProfileDetailsController.$inject = ['$http']
    function ProfileDetailsController($http){
        var profileVm = this;
        init();
        
        function init(){
       	 $http({
       		 method: 'GET',
       	     url: 'http://localhost:8080/RestuarantReservationApp/api/profile/details'
       	 })
       	 .success(function(data){
       		 console.log(data);
       		 profileVm.pdetails = data;
       		 var contactFormat = '('+ profileVm.pdetails.contact.substring(0,3) +') '+ profileVm.pdetails.contact.substring(3,6) +'-'+ profileVm.pdetails.contact.substring(6,11);
       		 console.log(contactFormat);
       	 })
       	 .error(function(err){
       		 console.log(err);
       	 })
       	 
       	 
        }
        
       
    }




})();