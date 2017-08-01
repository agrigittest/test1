"user strict";

MetronicApp.controller('FamilleListController', ['$scope', '$rootScope', '$http', 'Familles',
    function($scope, $rootScope, $http, Familles) {

        $scope

        $scope.$on('$viewContentLoaded', function() {
            // initisalie core components
            Metronic.initAjax();

            $rootScope.setting.layout.pageSidebarClosed = true;
            $rootScope.setting.layout.pageBodySolid = false;

            $scope.find();


        });

        $scope.find = function() {
            Familles.query({}, function(data) {
                console.log(data);
                $scope.familles = data.data;

            });
        };


    }
]);