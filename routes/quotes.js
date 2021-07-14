var express = require("express");
var router = express.Router();
const quotesCtrl = require("../controllers/quotes");

router.get("/", quotesCtrl.index);
router.get("/new", quotesCtrl.new);
router.get("/:id/edit", quotesCtrl.edit);
router.get("/:id", quotesCtrl.show);
router.put("/:id", quotesCtrl.update);
router.post("/", quotesCtrl.create);
router.delete("/:id", quotesCtrl.delete);

module.exports = router;
