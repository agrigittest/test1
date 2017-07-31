'use strict';

exports.install = function() {
    F.route('/famille', view_index);
};

// Read all users
function view_index() {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var User = MODEL('TFamille').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    User.find({}, "-_id CodeFamille libFamille", function(err, users) { //find() methode de mongoDB pour rechercher 
        //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
        self.json(users); //Methode de Total.js qui permet d'executer l'index.html  
    });

}