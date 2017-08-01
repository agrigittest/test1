"use strict";

MetronicApp.controller('FamilleListController', ['$scope', '$rootScope', '$http', 'FamillesRessource',
    // Crée le controleur avec en 
    // premier paramètre le nom du controleur, 
    // un tableau de paramètre possibles  
    // $scope =
    // $rootScope =
    // $http =
    // Familles Ressource =
    // $timeout
    // $filter

    function($scope, $rootScope, $http, FamillesRessource) {

        $scope.familles = [];

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
            FamillesRessource.query({}, function(data) {
                console.log(data); //Affichage de la data dans la console du serveur
                $scope.familles = data.data; // alimentation des données issues de la ressource Famille dans la variable familles

            });
        };


    }
]);