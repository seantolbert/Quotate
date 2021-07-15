const Quote = require("../models/quote");
const Source = require("../models/source");

module.exports = {
  index,
  new: newQuote,
  edit,
  show,
  update,
  create,
  delete: deleteQuote,
};

async function index(req, res) {
  try {
    const quotes = await Quote.find({});
    const sources = await Source.find({});
    res.render("quotes/index", {
      quotes,
      sources,
    });
  } catch (err) {
    res.send(err);
  }
}

async function newQuote(req, res) {
  try {
    const sources = await Source.find({});
    res.render("quotes/new", {
      sources,
    });
  } catch (err) {
    res.send(err);
  }
}

async function edit(req, res) {
  try {
    const quoteToEdit = await Quote.findById(req.params.id);
    res.render("quotes/edit", {
      quoteToEdit,
    });
  } catch (err) {
    res.send(err);
  }
}

async function show(req, res) {
  try {
    const quote = await Quote.findById(req.params.id).populate("source");
    res.render("quotes/show", {
      quote,
    });
  } catch (err) {
    res.send(err);
  }
}

async function update(req, res) {
  try {
    await Quote.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/quotes");
  } catch (err) {
    res.send(err);
  }
}

async function create(req, res) {
  try {
    const freshQuote = await Quote.create(req.body);
    res.redirect(`/quotes/${freshQuote._id}`);
  } catch (err) {
    res.send(err);
  }
}

async function deleteQuote(req, res) {
  try {
    await Quote.findByIdAndRemove(req.params.id);
    res.redirect("/quotes");
  } catch (err) {
    res.send(err);
  }
}
