const Source = require("../models/source");
const Quote = require("../models/quote");

module.exports = {
  new: newSource,
  create,
  addToQuote,
  // delete: deleteSource,
};

function addToQuote(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    quote.source.push(req.body.sourceId);
    quote.save(function (err) {
      res.redirect(`/quotes/${quote._id}`);
    });
  });
}

// function newSource(req, res) {
//     res.render('sources/new')
// }

function newSource(req, res) {
  Source.find({}, function (err, sources) {
    res.render("sources/new", {
      title: "Add Source",
      sources,
    });
  });
}

// async function create(req, res) {
//     try {
//         const newSource = await Source.create(req.body);
//         res.redirect(`/sources/${newSource._id}`);
//     } catch (err) {
//         res.send(err);
//     }
// }

function create(req, res) {
  Source.create(req.body, function (err, source) {
		res.redirect('/quotes');
	});
}
