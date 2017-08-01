'use strict';

exports.install = function() {
    F.route('/article', view_index);

    F.route('/article', creationArticle, ['post', 'json']);
    F.route('/article/{id}', view_unArticle);
    F.route('/article/{id}', majArticle, ['put', 'json']);
    F.route('/article/{id}', suppressionArticle, ['delete']);

};

// Read all articles
function view_index() {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var articles = MODEL('TArticle').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    articles.find()
        .populate('codeFamille')
        .exec(function(err, arts) { //find() methode de mongoDB pour rechercher 
            //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
            self.json({ data: arts, count: arts.length }); //Methode de Total.js qui permet d'executer l'index.html  
        });

}


// Read all users
function view_unArticle(id) {

    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var articles = MODEL('TArticle').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    articles.findOne({ _id: id })
        // .populate('codeFamille')
        .exec(function(err, art) {
            self.json(art); //Methode de Total.js qui permet d'executer l'index.html  
        });

}


function majArticle(id) {
    var self = this; // Permet de referencer le contexte si on change de niveau (Le fameux THAT .. principe de l'inception)
    var Article = MODEL('TArticle').schema; // MODEL est un mot clé reconnu par Total.js , le module doit se trouver dans le repertoire modules

    //User.findById(id, "-_id CodeFamille libFamille", function(err, user) { //find() methode de mongoDB pour rechercher 
    //self.view('index', users);			//Methode de Total.js qui permet d'executer l'index.html  
    Article.findByIdAndUpdate(id, self.body, { new: true }, function(err, fam) {
        self.json(fam);
    });

}

function creationArticle() {
    var self = this;
    var ArticleModel = MODEL('TArticle').schema;

    var article = new ArticleModel(self.body);
    article.save(function(err, doc) {
        if (err)
            return self.throw500(err);
        self.json(doc);
    })
}

function suppressionArticle(id) {
    var self = this;
    var ArticleModel = MODEL('TArticle').schema;

    ArticleModel.remove({ _id: id }, function(err, doc) {
        if (err)
            return throw500(err);
        self.json(doc);
    })

}