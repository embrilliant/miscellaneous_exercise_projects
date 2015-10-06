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
        url: '/training_emily/Buecherliste/data.json'
    });

    var jsBookCollection = new BookCollection();

    //view
    var BookView = Backbone.View.extend({
        el : $("#tbody"),
        bookTemplate: Handlebars.compile( $("#bookTemplate").html() ),
        //bookTemplate: _.template( $("#bookTemplate").html() ),
        initialize: function() {
            var thisBookView = this;

            jsBookCollection.fetch(
                {
                    success: function() { thisBookView.render(); },
                    error: function() { console.error('Unable to load booklist!'); }
                }
            );
        },
        render: function() {
            console.log("renderrrrrrr", jsBookCollection.toJSON(), this.$el);

            this.$el.append(this.bookTemplate({ books: jsBookCollection.toJSON() }));

            return this;
        }
    });

    var bookView = new BookView();

});