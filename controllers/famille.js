'use strict';

exports.install = function() {
    F.route('/famille', view_listFamille);
    F.route('/famille/{id}', view_unefamille);
    F.route('/famille/{id}', majFamille, ['put', 'json']);
};

// Read all users
function view_listFamille() {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var User = MODEL('TFamille').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    User.find({}, "_id CodeFamille libFamille", function(err, familles) { //find() methode de mongoDB pour rechercher 
        //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
        self.json({ data: familles, count: familles.length });

    });

}

// Read all users
function view_unefamille(id) {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var User = MODEL('TFamille').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    //User.findById(id, "-_id CodeFamille libFamille", function(err, user) { //find() methode de mongoDB pour rechercher 
    //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
    User.findOne({ _id: id }, function(err, user) {

        self.json(user); //Methode de Total.js qui permet d'executer l'index.html  
    });

}

function majFamille(id) {
    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var User = MODEL('TFamille').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    //User.findById(id, "-_id CodeFamille libFamille", function(err, user) { //find() methode de mongoDB pour rechercher 
    //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
    User.findByIdAndUpdate(id, self.body, { new: true }, function(err, fam) {
        self.json(fam);
    });

}