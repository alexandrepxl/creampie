var creampie = angular.module('creampie.services', []);

creampie.factory('WomansService', function($http) {
    
    
    var womans = [];

    $http.get('https://dl.dropboxusercontent.com/u/30914005/woman.json')
       .then(function(resp){
           
           for(p in resp.data.woman){

              
               var result = resp.data.woman[p];
               womans.push(result);
        
           }
       
       }, function(err){
        
        console.error('ERR', err);

    });

  return {
    all: function() {
      return womans;
    },
    get: function(womanId) {
      // Simple index lookup
      return womans[womanId];
    }
  }
});