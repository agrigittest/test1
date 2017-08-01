"use strict";
//Fichier ressource qui va contenir les requêtes 

//On utilise toujours MetronicApp pour Angular
//Factory est l'inverse de controller 
MetronicApp.factory("Familles", ['$resource',
    function($resource) {
        return $resource('/famille/:Id', {
            Id: '@_id'
        }, {
            query: { method: 'GET', isArray: false },
            update: { method: 'PUT' }

        });
    }

]);