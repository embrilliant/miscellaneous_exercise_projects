$(function() {
    //model
    var Book = Backbone.Model.extend({
        defaults: {
            title: "JavaScript Magic",
            author: "Someone",
            url: ""
        }
    });

    //collection
    var BookCollection = Backbone.Collection.extend({
        model: Book,
        url: '/training_emily/Buecherliste/data.php'
    });

    var jsBookCollection = new BookCollection();

    //view
    var BookView = Backbone.View.extend({
        el : $("#tbody"),
        bookTemplate: Handlebars.compile( $("#bookTemplate").html() ),
        events: {
            "click .title": "sortTitle",
            "click .author": "sortAuthor"
        },
        btnIconTitle: "glyphicon glyphicon-triangle-bottom",
        btnIconAuthor: "glyphicon glyphicon-triangle-bottom",
        data: [],
        initialize: function() {
            var thisBookView = this;

            jsBookCollection.fetch(
                {
                    success: function() {
                        thisBookView.data = jsBookCollection.toJSON();
                        thisBookView.render();
                    },
                    error: function() {
                        console.error('Unable to load booklist!');
                    }
                }
            );
        },
        render: function() {

            this.$el.html(this.bookTemplate({ books: this.data,
                                                iconTitle: this.btnIconTitle,
                                                iconAuthor: this.btnIconAuthor
            }));

            return this;
        },
        //sorting methods
        titleOrder: "asc",
        authorOrder: "asc",
        sortTitle: function() {
            var listArr = jsBookCollection.toJSON();
            var sortedList;
            if (this.titleOrder === "asc") {
                sortedList = listArr.sort(function(a, b) {
                    if (a.title > b.title) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                this.titleOrder = "des";
                this.btnIconTitle = "glyphicon glyphicon-triangle-bottom";
            } else {
                sortedList = listArr.sort(function(a, b) {
                    if (a.title > b.title) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                this.titleOrder = "asc";
                this.btnIconTitle = "glyphicon glyphicon-triangle-top";
            }
            this.data = sortedList;

            this.render();
        },
        sortAuthor: function() {
            var listArr = jsBookCollection.toJSON();
            var sortedList;
            if (this.authorOrder === "asc") {
                sortedList = listArr.sort(function(a, b) {
                    if (a.author.trim() > b.author.trim()) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                this.authorOrder = "des";
                this.btnIconAuthor = "glyphicon glyphicon-triangle-bottom";
            } else {
                sortedList = listArr.sort(function(a, b) {
                    if (a.author.trim() > b.author.trim()) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
                this.authorOrder = "asc";
                this.btnIconAuthor = "glyphicon glyphicon-triangle-top";
            }
            this.data = sortedList;
            this.render();
        }
    });

    var bookView = new BookView();

});