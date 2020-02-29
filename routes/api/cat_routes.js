// 
//   FIX THIS FILE
// 

const router = require("express").Router();

const { getCats, createCat, updateCat, deleteCat } = require("../../controllers/cats_controller");

// create full crud at /cats  (eventually /api/cats)

// router.get("/cats", (req, res) => {
//     .then(catdata => {
//     res.status(200).json(catdata);
// })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });



// router.delete(".cats:id", (req, res) => {
//     deleteCat(req.params.id)
//     .then(catdata=>{
//         if (catdata.code ===404){
//             return res.status(404).json(catdata);
//         }
//         res.status(200).json
//     })
// })


module.exports = router;