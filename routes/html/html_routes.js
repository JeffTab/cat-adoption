// import express router
const router = require("express").Router();

//  import functionality to get all cats

const { getCats } = require("../../controllers/cats_controller");

// set up root get
router.get("/", (req, res) => {
    getCats()
        .then(catdata => {
            res.render("home", { cats: catdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

module.exports = router;