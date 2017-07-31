'use strict';

exports.install = function() {
    F.route('/famille', view_index);
    F.route('/famille/{id}', view_unefamille);

};

// Read all users
function view_index() {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var User = MODEL('TFamille').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    User.find({}, "_id CodeFamille libFamille", function(err, users) { //find() methode de mongoDB pour rechercher 
        //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
        self.json(users); //Methode de Total.js qui permet d'executer l'index.html  
    });

}

// Read all users
function view_unefamille(id) {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var User = MODEL('TFamille').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    //User.findById(id, "-_id CodeFamille libFamille", function(err, user) { //find() methode de mongoDB pour rechercher 
    //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
    User.findOne({ CodeFamille: id }, "-_id CodeFamille libFamille", function(err, user) {

        self.json(user); //Methode de Total.js qui permet d'executer l'index.html  
    });

}