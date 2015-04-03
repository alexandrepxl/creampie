var creampie = angular.module('creampie.controllers', []);

creampie.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});





creampie.controller('WomansCtrl', function($scope, WomansService) {


   $scope.womans = WomansService.all();
    
  // Variáveis de escopo filtro mulheres
   $scope.pushMM = { checked: true };
   $scope.pushLR= { checked: true };
   $scope.pushLocal = { checked: false };
   $scope.pushFull = { checked: false };
   $scope.pushMulher = { checked: false };
   $scope.pushCasais = { checked: false };
   $scope.wFilter = "";
   $scope.wFilterLocal = "";
   $scope.wFilterFull = "";
   $scope.wFilterMulher = "";
   $scope.wFilterCasais = "";
    
   $scope.pushMorenasMulatas = function() {
   
       
   };
   $scope.pushLoirasRuivas = function() {};
   $scope.pushLocalProprio = function() {
      console.log($scope.pushLocal.checked);
   };
   $scope.pushAtendFull = function() {};
   $scope.pushAtendMulher = function() {};
   $scope.pushAtendCasais = function() {};
    
    var startFilter = function(){
        if($scope.pushMM.checked == true && $scope.pushLR.checked == false){     
            $scope.wFilter = "01";
        }else if($scope.pushMM.checked == false && $scope.pushLR.checked == true){
            $scope.wFilter = "02";
         }else if($scope.pushMM.checked == true && $scope.pushLR.checked == true){
             $scope.wFilter = "";
         }else{
             $scope.wFilter = "null";
         }
        
        if($scope.pushLocal.checked == true){
            $scope.wFilterLocal = "Sim";
        }else{
             $scope.wFilterLocal = "";
        }
        
        if($scope.pushFull.checked == true){
             $scope.wFilterFull = "Sim";
        }else{
             $scope.wFilterFull = "";
        }
        
         if($scope.pushMulher.checked == true){
             $scope.wFilterMulher = "Sim";
        }else{
             $scope.wFilterMulher = "";
        }
        
        if($scope.pushCasais.checked == true){
             $scope.wFilterCasais = "Sim";
        }else{
             $scope.wFilterCasais = "";
        }
    };
    
  // Fim filtro de mulheres
    

   $scope.wOptions = function(){
   
       $('.wOptions').fadeIn(150, function(){
           $('.iconset').css('display','none');
           $('.icondone').css('display','block');
       });
   };
    
   $scope.wOptionsDone = function(){
      $('.wOptions').fadeOut(150, function(){
          $('.icondone').css('display','none');
          $('.iconset').css('display','block');
      });
       
      startFilter();
   };
    
    
    // Refrech 
    
    $scope.doRefresh = function() {
    $scope.womans =  WomansService.all();
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };


});



// Tela detalhes mulheres
creampie.controller('DetailWomanCtrl',function($scope, $stateParams, WomansService){
    
    $scope.woman = WomansService.get($stateParams.womanId);
    



});


// Massagens sexual
creampie.controller('MassagensCtrl',function($scope){

});


// Fantasias e Fetiches
creampie.controller('FantasiasCtrl',function($scope){

});

// Moteis
creampie.controller('MoteisCtrl',function($scope){

});


// Termas
creampie.controller('TermasCtrl',function($scope, $http, $ionicLoading, $compile){
    
        $scope.listsTermas = [];
        $scope.photosTermas = [];
        
        $scope.teste = "";
        
    
            // Pega a lista de mulheres anunciadas
        $http.get('https://dl.dropboxusercontent.com/u/30914005/termas.json').then(function(resp){
        
            
          for(t in resp.data.termas){     
            
             $scope.resultTermas = resp.data.termas[t];
              
              
             $scope.listsTermas.push($scope.resultTermas);
            
                for(wb in $scope.resultTermas.images){
               
                     $scope.resultPhotos = resp.data.termas[t].images[wb];
                     $scope.photosTermas.push($scope.resulPhotos);

            }
            
        }
            
     }, function(err){
        
        console.error('ERR', err);
    
      });
    
});




creampie.controller('MapTermasCtrl',function($scope, $http, $ionicLoading, $compile){
    
    
    
$scope.initialize = function() {

        $scope.listMapTermas = [];

    
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: new google.maps.LatLng(-23.003420, -43.370255),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow;

        var marker;
    
        $http.get('https://dl.dropboxusercontent.com/u/30914005/termas.json').then(function(resp){
        
          for(t in resp.data.termas){     
            
             $scope.resultTermas = resp.data.termas[t];
              
             $scope.listMapTermas.push($scope.resultTermas);

             marker = new google.maps.Marker({
                 position: new google.maps.LatLng($scope.listMapTermas[t].latlng[0], $scope.listMapTermas[t].latlng[1]),
                 icon: 'img/pin.png',
                 map: map
             });
              
              google.maps.event.addListener(marker, 'click', (function(marker, t) {
                  return function() {
                
                var contentString = '<div id="content-marker">'+
                                      '<div class="marker-avatar" style="background-image: url( ' + $scope.listMapTermas[t].avatar + ');background-size: cover; width: 200px; height: 100px ">'+
                                      '</div>'+
                                  
                                       '<div>'+
                                          '<h4>'+ $scope.listMapTermas[t].name +'</h4>'+
                                          '<p>'+ 'Bairro:' +  $scope.listMapTermas[t].district +'</p>'+
                                          '<p>'+ $scope.listMapTermas[t].street +'</p>'+'</div>'+
                                     '</div>';
             
                 infowindow.setContent(contentString);
                 infowindow.open(map, marker);
             
              }
             })(marker, t));
 
        }
            
     }, function(err){
        
        console.error('ERR', err);
    
      });
      
        
  }    
    
});

// Meus favoritos
creampie.controller('FavoritosCtrl',function($scope){

});



// Terapias
creampie.controller('TerapiasCtrl',function($scope){

});

// Casas de Swing
creampie.controller('CasasSwingCtrl',function($scope){

});

// Parceiros
creampie.controller('ParceirosCtrl',function($scope){

});

