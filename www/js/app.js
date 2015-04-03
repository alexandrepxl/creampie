
var creampie = angular.module('creampie', ['ionic','creampie.services', 'creampie.controllers','angular.filter']);

creampie.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

creampie.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'WomansCtrl'
        }
      }
    })
  .state('app.womans', {
      url: "/womans",
      views: {
        'menuContent': {
          templateUrl: "templates/womans.html",
          controller: 'WomansCtrl'
        }
      }
    })
   .state('app.woman', {
      url: "/woman/:womanId",
      views: {
        'menuContent': {
          templateUrl: "templates/details/detail-woman.html",
          controller: 'DetailWomanCtrl'
        }
      }
    })
   .state('app.transex', {
      url: "/transex",
      views: {
        'menuContent': {
          templateUrl: "templates/transex.html",
          controller: 'WomansCtrl'
        }
      }
    })
    .state('app.favoritos', {
      url: "/favoritos",
      views: {
        'menuContent': {
          templateUrl: "templates/favoritos.html",
          controller: 'FavoritosCtrl'
        }
      }
    })
  .state('app.massagens', {
      url: "/massagens",
      views: {
        'menuContent': {
          templateUrl: "templates/massagens.html",
          controller: 'MassagensCtrl'
        }
      }
    })
  .state('app.fantasias', {
      url: "/fantasias",
      views: {
        'menuContent': {
          templateUrl: "templates/fantasias.html",
          controller: 'FantasiasCtrl'
        }
      }
    })
  .state('app.terapias', {
      url: "/terapias",
      views: {
        'menuContent': {
          templateUrl: "templates/terapias.html",
          controller: 'TerapiasCtrl'
        }
      }
    })
  .state('app.moteis', {
      url: "/moteis",
      views: {
        'menuContent': {
          templateUrl: "templates/moteis.html",
          controller: 'MoteisCtrl'
        }
      }
    })
  .state('app.casasSwing', {
      url: "/casasSwing",
      views: {
        'menuContent': {
          templateUrl: "templates/casas_swing.html",
          controller: 'CasasSwingCtrl'
        }
      }
    })
  .state('app.thermas', {
      url: "/thermas",
      views: {
        'menuContent': {
          templateUrl: "templates/thermas.html",
          controller: 'MapTermasCtrl'
        }
      }
    })
  .state('app.parceiros', {
      url: "/parceiros",
      views: {
        'menuContent': {
          templateUrl: "templates/parceiros.html",
          controller: 'ParceirosCtrl'
        }
      }
    });
    
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

