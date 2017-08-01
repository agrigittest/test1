"use strict";

MetronicApp.controller('FamilleController', ['$scope', '$rootScope', '$http', 'FamillesRessource',
    function($scope, $rootScope, $http, FamillesRessource) {

        $scope.famille = {};

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
            FamillesRessource.get({
                id: $rootScope.$stateParams.id
            }, function(data) {
                console.log(data); //Affichage de la data dans la console du serveur
                $scope.famille = data; // alimentation des données issues de la ressource Famille dans la variable familles

            });
        };

        $scope.update = function() {
            $scope.famille.$update(function(data) {
                //réinjection des valeurs enregistres par le serveur dans le formulaire du client
                console.log(data);
                $scope.findOne();
            });
        };
        $scope.create = function() {
            var famille = new FamillesRessource($scope.famille);
            famille.$save(function(data) {
                console.log(data);
                //Fonction qui transfère vers la page de modification du nouvel élément créé
                $rootScope.$state.go("famille.show", { id: data._id });
            });
        };


    }
]);