"use strict";

MetronicApp.controller('ArticleController', ['$scope', '$rootScope', '$http', 'ArticlesRessource',
    function($scope, $rootScope, $http, ArticlesRessource) {

        $scope.article = {};

        $scope.$on('$viewContentLoaded', function() {
            // initisalie core components
            Metronic.initAjax();

            //Parametres propre au module Angular qui faut initialiser
            //$rootScope.setting.layout.pageSidebarClosed = true;
            //$rootScope.setting.layout.pageBodySolid = false;

            //Appel à la méthode find afin d'afficher les familles
            $scope.findOne();

        });

        //Méthode find qui utilise la ressource Famille,
        // Cette ressource va renvoyer les familles de la base
        $scope.findOne = function() {
            ArticlesRessource.get({
                id: $rootScope.$stateParams.id
            }, function(data) {
                console.log(data); //Affichage de la data dans la console du serveur
                $scope.article = data; // alimentation des données issues de la ressource Famille dans la variable familles

            });
        };

        $scope.update = function() {
            $scope.article.$update(function(data) {
                //réinjection des valeurs enregistres par le serveur dans le formulaire du client
                console.log(data);
                $scope.findOne();
            });
        };
        $scope.create = function() {
            var article = new ArticlesRessource($scope.article);
            article.$save(function(data) {
                console.log(data);
                //Fonction qui transfère vers la page de modification du nouvel élément créé
                $rootScope.$state.go("article.show", { id: data._id });
            });
        };


    }
]);

MetronicApp.controller('ArticleListController', ['$scope', '$rootScope', '$http', 'ArticlesRessource',
    // Crée le controleur avec en 
    // premier paramètre le nom du controleur, 
    // un tableau de paramètre possibles  
    // $scope = C'est la donnee utilisable dans le formulaire (DOM limité )
    // $rootScope =  C'est une variable globale (Exemple la session)
    // $http = 
    // Familles Ressource = (pas de $ car c'est les notres... (pas ceux d'angular comme scope))
    // $timeout =  
    // $filter = 

    function($scope, $rootScope, $http, ArticlesRessource) {

        $scope.articles = [];

        $scope.$on('$viewContentLoaded', function() {
            // initisalie core components
            Metronic.initAjax();

            //Parametres propre au module Angular qui faut initialiser
            //$rootScope.setting.layout.pageSidebarClosed = true;
            //$rootScope.setting.layout.pageBodySolid = false;

            //Appel à la méthode find afin d'afficher les familles
            $scope.find();

        });

        //Méthode find qui utilise la ressource Famille,
        // Cette ressource va renvoyer les familles de la base
        $scope.find = function() {
            ArticlesRessource.query({}, function(data) {
                console.log(data); //Affichage de la data dans la console du serveur
                $scope.articles = data.data; // alimentation des données issues de la ressource Famille dans la variable familles

            });
        };
        $scope.delete = function(article) {
            ArticlesRessource.delete({ id: article._id }, function(data) {
                console.log(data);
                $scope.find();
            });
        };


    }
]);