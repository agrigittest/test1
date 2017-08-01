"user strict";

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