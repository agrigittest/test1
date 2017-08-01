'use strict';

exports.install = function() {
    F.route('/stock', view_index);
    F.route('/stock/{id}', view_unstock);

};

// Read all users
function view_index() {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var Stock = MODEL('TStock').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    Stock.find({}, "_id CodeStock LibStock", function(err, stock) { //find() methode de mongoDB pour rechercher 
        //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
        self.json(stock); //Methode de Total.js qui permet d'executer l'index.html  
    });

}

// Read all users
function view_unstock(id) {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var Stock = MODEL('TStock').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    //User.findById(id, "-_id CodeFamille libFamille", function(err, user) { //find() methode de mongoDB pour rechercher 
    //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
    Stock.findOne({ CodeStock: parseInt(id) }, "-_id CodeStock LibStock", function(err, stock) {

        self.json(user); //Methode de Total.js qui permet d'executer l'index.html  
    });

}