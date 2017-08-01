'use strict';

exports.install = function() {
    F.route('/article', view_index);
    //F.route('/article/{id}', view_unArticle);

};

// Read all articles
function view_index() {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var articles = MODEL('TArticle').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    articles.find(function(err, arts) { //find() methode de mongoDB pour rechercher 
        //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
        self.json(arts); //Methode de Total.js qui permet d'executer l'index.html  
    });

}