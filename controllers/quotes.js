const Quote = require('../models/quote')

module.exports = {
    index,
    new: newQuote,
    edit,
    show,
    update,
    create,
    delete: deleteQuote,
}

async function index(req, res) {
    try {
        const quotes = await Quote.find({});
        console.log(quotes)
        res.render('quotes/index', {
            quotes
        })
    } catch (err) {
        res.send(err);
    }
}

function newQuote(req, res) {
    res.render('quotes/new');
}

async function edit(req, res) {
	try {
		const editQuote = await Quote.findById(req.params.id);
		res.render('edit.ejs', {
			quote: editQuote,
		});
	} catch (err) {
		res.send(err);
	}
}

async function show(req, res) {
    try {
        const quote = await Quote.findById(req.params.id);
        res.render('quotes/show.ejs', {
            quote,
        })
    } catch (err) {
        res.send(err);
    }
}

async function update(req, res) {
    try {
        const updateQuote = Quote.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.redirect('/quotes')
    } catch (err) {
        res.send(err);
    }
}

async function create(req, res) {
    try {
        const freshQuote = await Quote.create(req.body);
        res.redirect(`/quotes/${freshQuote._id}`)
    } catch (err) {
        res.send(err);
    }
}

async function deleteQuote(req, res) {
    try {
        await Quote.findByIdAndRemove(req.params.id);
        res.redirect('/quotes')
    } catch (err) {
        res.send(err);
    }
}