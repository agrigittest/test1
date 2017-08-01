"use strict";

/*
GET : Accède à une ressource
HEAD : Accède aux métadonnées d’une ressource
POST : Ajoute une ressource
PUT : Met à jour une ressource complète en la remplaçant par une nouvelle version (99% des cas).
PATCH : Met à jour une partie d’une ressource en envoyant un différentiel (une sorte de ‘git diff’)
DELETE : Supprime une ressource
*/

/*
Les méthode create, query, get sont déjà dans Angular, nous n'avons aps besoin de les réécrire.
*/


//Fichier ressource qui va contenir les requêtes 


//On utilise toujours MetronicApp pour Angular
//Factory est un service méthode qui va checker des URLS (que du REST)
//
MetronicApp.factory("FamillesRessource", ['$resource',
    function($resource) {
        return $resource('/famille/:id', {
            id: '@_id'
        }, {
            query: { method: 'GET', isArray: false },
            update: { method: 'PUT' },
            delete: { method: 'DELETE' }
        });
    }

]);