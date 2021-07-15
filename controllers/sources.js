const Source = require("../models/source");
const Quote = require("../models/quote");

module.exports = {
  new: newSource,
  create,
  addToQuote,
};

function addToQuote(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    quote.source.push(req.body.sourceId);
    quote.save(function (err) {
      res.redirect(`/quotes/${quote._id}`);
    });
  });
}

function newSource(req, res) {
  Source.find({}, function (err, sources) {
    res.render("sources/new", {
      title: "Add Source",
      sources,
    });
  });
}

function create(req, res) {
  Source.create(req.body, function (err, source) {
    res.redirect("/quotes");
  });
}
