'use strict';
/*
GET : Accède à une ressource
HEAD : Accède aux métadonnées d’une ressource
POST : Ajoute une ressource
PUT : Met à jour une ressource complète en la remplaçant par une nouvelle version (99% des cas).
PATCH : Met à jour une partie d’une ressource en envoyant un différentiel (une sorte de ‘git diff’)
DELETE : Supprime une ressource
*/


exports.install = function() {
    F.route('/famille', view_listFamille);
    F.route('/famille', creationFamille, ['post', 'json']);
    F.route('/famille/{id}', view_unefamille);
    F.route('/famille/{id}', majFamille, ['put', 'json']);
    F.route('/famille/{id}', suppressionFamille, ['delete']);
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

function creationFamille() {
    var self = this;
    var FamilleModel = MODEL('TFamille').schema;

    var famille = new FamilleModel(self.body);
    famille.save(function(err, doc) {
        if (err)
            return self.throw500(err);
        self.json(doc);
    })
}

function suppressionFamille(id) {
    var self = this;
    var FamilleModel = MODEL('TFamille').schema;

    FamilleModel.remove({ _id: id }, function(err, doc) {
        if (err)
            return throw500(err);
        self.json(doc);
    })

}